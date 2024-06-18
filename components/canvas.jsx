"use client";
import React, { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
const Canvas = (props) => {
  const [maskImage, setMaskImage] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const canvasRef = useRef(null);
  const utilCanvasRef = useRef(null);
  useEffect(() => {
    //canvas
    const utilCanvas = utilCanvasRef.current;
    const utilContext = utilCanvas.getContext("2d");
    var sizeImage = new Image();
    sizeImage.src = props.elements[0].mask;

    sizeImage.onload = () => {
      utilCanvas.width = sizeImage.width;
      utilCanvas.height = sizeImage.height;
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.globalCompositeOperation = "destination-in";
    utilContext.globalCompositeOperation = "destination-in";
    const e = props.elements;

    props.elements.forEach((e) => {
      var image = new Image();
      image.src = e.mask;
      image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] == 255) {
            data[i] = e.color;
            data[i + 1] = 128;
            data[i + 2] = 89;
          } else {
            data[i + 3] = 0;
          }
        }

        context.putImageData(imageData, 0, 0);
        utilContext.drawImage(canvas, 0, 0);
        // context.save();
        saveAsImage();
      };
    });
  }, []);

  function saveAsImage() {
    const utilCanvas = utilCanvasRef.current;
    const utilContext = utilCanvas.getContext("2d");
    const imageURL = utilCanvas.toDataURL("image/png");
    // .replace("image/octet-stream");
    setMaskImage(imageURL);
  }

  return (
    <div>
      {maskImage && (
        <NextImage
          src={maskImage}
          width={windowSize.width * 0.3}
          height={windowSize.height * 0.5}
          className='canvas_class'
        />
      )}
      <NextImage
        src={props.image}
        width={windowSize.width * 0.3}
        height={windowSize.height * 0.5}
        className='segmented_image'
      />
      <canvas
        ref={canvasRef}
        hidden
      ></canvas>
      <canvas
        ref={utilCanvasRef}
        hidden
      ></canvas>
    </div>
  );
};

export default Canvas;

// var myImg =ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
