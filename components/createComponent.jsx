"use client";
import { useEffect, useState } from "react";
import ModelSelect from "./modelSelect";
import MaskShowcase from "./masksShowcase";
import Image from "next/image";
import { ClimbingBoxLoader } from "react-spinners";
const CreateComponent = () => {
  const [masks, setMasks] = useState(null);
  const [imageToSegment, setImageToSegment] = useState(null);
  const [pix2pixImage, setPix2PixImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function eraseMasksAndImage() {
    setImageToSegment(null);
    setMasks(null);
  }
  return (
    <div className=''>
      {masks ? (
        <MaskShowcase
          goBack={eraseMasksAndImage}
          masks={masks}
          image={imageToSegment}
        />
      ) : isLoading ? (
        <ClimbingBoxLoader
          color='#A5637A'
          className='loader'
          size={40}
        />
      ) : (
        <ModelSelect
          setMasks={setMasks}
          setImage={setImageToSegment}
          startLoading={setIsLoading}
        />
      )}
    </div>
  );
};

export default CreateComponent;
