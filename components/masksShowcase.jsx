import React from "react";
import Canvas from "./canvas";
import Image from "next/image";
const MaskShowcase = (props) => {
  return (
    <div className='mask_showcase text-center'>
      <div className='flex flex-row justify-evenly items-start'>
        <h1 className='m-5'>Wyniki Segmentacji</h1>
        <button onClick={props.goBack}>Powrót</button>
      </div>
      {props.masks
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
        : "Loading..."}
      {props.image ? (
        <Image
          className='segmented_image'
          src={props.image}
          width={props.image.width * 0.5}
          height={props.image.height * 0.5}
          style={{ position: "absolute", zIndex: "-1" }}
        />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default MaskShowcase;
