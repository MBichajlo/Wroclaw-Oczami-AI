import React from "react";
import Canvas from "./canvas";
import Image from "next/image";
import output from "@pix2pix/output.png";
const MaskShowcase = (props) => {
  return (
    <div className='mask_showcase text-center'>
      <div className='flex flex-row flex-1 text-2xl justify-evenly items-baseline m-6 w-2/4 ml-auto mr-auto'>
        {props.masks ? (
          <button className='button flex-1'>Zachowaj maskę jako zdjęcie</button>
        ) : null}
        <h1 className='flex-1'>
          {props.masks ? "Wyniki segmentacji" : "Wyniki Pix2Pix"}
        </h1>
        <button
          onClick={props.goBack}
          className='button flex-1'
        >
          Powrót
        </button>
      </div>
      {/* {props.masks
        ? props.masks.map((e, index) => {
            return (
              <div
                style={{
                  position: "",
                }}
              >
                <Canvas elements={e}></Canvas>
              </div>
            );
          })
        : "Loading..."} */}
      <div className='flex flex-col justify-start items-center'>
        {props.masks ? (
          <Canvas
            elements={props.masks}
            image={props.image}
          ></Canvas>
        ) : (
          <Image
            src={output}
            width={output.width * 2}
            height={output.height * 2}
          />
        )}
        {/* {props.image ? (
          <Image
            className='segmented_image'
            src={props.image}
            width={props.image.width * 0.5}
            height={props.image.height * 0.5}
            // objectFit='cover'

            // style={{ position: "absolute", zIndex: "-1" }}
          />
        ) : (
          <h1>Loading</h1>
        )} */}
      </div>
    </div>
  );
};

export default MaskShowcase;
