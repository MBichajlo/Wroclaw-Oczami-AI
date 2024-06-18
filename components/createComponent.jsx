"use client";
import { useEffect, useState } from "react";
import ModelSelect from "./modelSelect";
import MaskShowcase from "./masksShowcase";
import Image from "next/image";

import { Alert, Icon, IconButton } from "@mui/material";
import { ClimbingBoxLoader } from "react-spinners";
import { Close } from "@mui/icons-material";
const CreateComponent = () => {
  const [masks, setMasks] = useState(null);
  const [imageToSegment, setImageToSegment] = useState(null);
  const [showcaseReady, setShowcaseReady] = useState(false);
  const [errorAlert, setErrorAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function eraseMasksAndImage() {
    setImageToSegment(null);
    setMasks(null);

    setShowcaseReady(false);
  }
  useEffect(() => {
    if (masks) {
      setShowcaseReady(true);
    }
  }, [masks, imageToSegment]);
  return (
    <div className='h-fit'>
      {errorAlert ? (
        <Alert
          severity='error'
          variant='filled'
          className='m-5'
          action={
            <IconButton
              onClick={() => {
                setErrorAlert(null);
              }}
            >
              <Close></Close>
            </IconButton>
          }
        >
          Error: {errorAlert}
        </Alert>
      ) : null}
      {showcaseReady ? (
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
          showcase={setShowcaseReady}
          setErrorAlert={setErrorAlert}
        />
      )}
    </div>
  );
};

export default CreateComponent;
