import React from "react";
import Canvas from "./canvas";

const MaskShowcase = (props) => {
  return (
    <div>
      {props.masks
        ? props.masks.map((e, index) => {
            return (
              <div
                style={{
                  //   backgroundColor: colors[index],
                  width: "300px",
                  position: "",
                }}
              >
                {/* <Image
                      style={{
                        // opacity: "0.5",
    
                        mixBlendMode: "multiply",
                      }}
                      src={e.mask}
                      width={300}
                      height={300}
                    /> */}
                <Canvas elements={e}></Canvas>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
};

export default MaskShowcase;
