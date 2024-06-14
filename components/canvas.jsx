"use client";
import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const utilCanvasRef = useRef(null);
  useEffect(() => {
    const utilCanvas = utilCanvasRef.current;
    const utilContext = utilCanvas.getContext("2d");
    var sizeImage = new Image();
    sizeImage.src = props.elements[0].mask;
    sizeImage.onload = () => {
      utilCanvas.width = sizeImage.width * 0.5;
      utilCanvas.height = sizeImage.height * 0.5;
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
        canvas.width = image.width * 0.5;
        canvas.height = image.height * 0.5;

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
      };
    });
  }, []);

  function saveAsImage() {
    const utilCanvas = utilCanvasRef.current;
    const utilContext = utilCanvas.getContext("2d");
    const savedImage = utilCanvas.toDataURL("image/png");

    console.log(savedImage);
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        className='canvas_class'
        hidden
      ></canvas>
      <canvas
        ref={utilCanvasRef}
        className='canvas_class'
        // hidden
      ></canvas>
    </div>
  );
};

export default Canvas;

// var myImg =ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
