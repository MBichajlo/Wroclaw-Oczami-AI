"use client";
import { useEffect, useState } from "react";
import ModelSelect from "./modelSelect";
import MaskShowcase from "./masksShowcase";
const CreateComponent = () => {
  const [masks, setMasks] = useState(null);
  useEffect(() => {
    console.log(masks);
  }, [masks]);
  return (
    <div className=''>
      {masks ? (
        <MaskShowcase masks={masks} />
      ) : (
        <ModelSelect setMasks={setMasks} />
      )}
    </div>
  );
};

export default CreateComponent;
