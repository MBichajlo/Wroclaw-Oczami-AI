import React from "react";
import Canvas from "./canvas";
import Image from "next/image";
const MaskShowcase = (props) => {
  return (
    <div className='mask_showcase text-center'>
      <div className='flex flex-row flex-1 justify-evenly items-baseline m-6 w-2/4 ml-auto mr-auto'>
        <button className='button flex-1'>Zachowaj maskę jako zdjęcie</button>
        <h1 className='flex-1'>Wyniki Segmentacji</h1>
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
      <div>
        <Canvas
          elements={props.masks}
          image={props.image}
        ></Canvas>
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
