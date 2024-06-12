"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Canvas from "@components/canvas";
const page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:3000/api/segmentation"
        );
        setData(result.data.masks);
        console.log(data);
        console.log("AAAA");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData().then(console.log("D"));
  }, []);
  return (
    <div>
      {data
        ? data.map((e, index) => {
            console.log(e);
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

export default page;
