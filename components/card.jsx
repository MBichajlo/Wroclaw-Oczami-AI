"use client";
import NextImage from "next/image";
import SouthIcon from "@mui/icons-material/South";
import { Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createContext, useContext, useEffect, useRef, useState } from "react";

import axios from "axios";

const Card = (props) => {
  const [file, setFile] = useState(null);
  // const [errorAlert, setErrorAlert] = useState(null);
  const inputRef = useRef(null);
  const [divClicked, setDivClicked] = useState(false);
  function handleChange(e) {
    console.log(file);
    setFile(e.target.files[0]);
    const imageURL = URL.createObjectURL(e.target.files[0]);
    const image = new Image();
    image.src = imageURL;
    image.onload = () => {
      props.setImage(image);
    };
  }

  async function sendToBackend() {
    props.startLoading(true);
    const formData = new FormData();

    if (props.text.name == "SegFormer") {
      formData.append("file", file);

      try {
        const results = await fetch("/api/segmentation", {
          method: "POST",
          body: formData,
        });

        results.json().then((data) => {
          console.log(data);
          if (results.ok) {
            props.setMasks(data.masks);
          } else {
            // console.log(data);
            props.setErrorAlert(data.error);
            // console.log(errorAlert);
          }
          props.startLoading(false);
        });
        // console.log(data);

        // props.showcase(true);
      } catch (error) {
        console.log("ERROR");
        props.startLoading(false);
        props.setErrorAlert(error);
      }
    }

    if (props.text.name == "Pix2Pix") {
      props.startLoading(true);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        formData.append("data", reader.result);
        try {
          const results = await fetch("/api/pix2pix", {
            method: "POST",
            body: formData,
            signal: controller.signal,
          });
          clearTimeout(timeoutID);
          console.log(results);

          props.startLoading(false);
          props.showcase(true);
        } catch (er) {
          console.log(er);
          props.setErrorAlert(er.response.data);
          props.startLoading(false);
        }
      };
    }
  }

  return (
    <div
      className={`create_card flex flex-col justify-around items-center ${
        divClicked ? "clicked" : null
      }`}
      onClick={() => {
        setDivClicked(!divClicked);
      }}
    >
      <NextImage
        src={props.image}
        className='card_background'
      />
      {/* <div className='flex flex-col justify-around items-center h-full'>
        <h1>Stwórz </h1>
        <button className='bg-orange-700 rounded p-2'>Losową kamienice</button>
        <h2>sss</h2>
      </div> */}
      <h1>{props.text.name}</h1>
      <h2>{props.text.firstText}</h2>
      <SouthIcon />
      <h2>{props.text.secondText}</h2>
      {props.text.thirdText && <SouthIcon />}
      {props.text.thirdText && <h2>{props.text.thirdText}</h2>}
      <input
        ref={inputRef}
        type='file'
        name='image'
        id='image'
        accept='image/*'
        onChange={handleChange}
        hidden
      />
      {props.text.thirdText && (
        <button
          className='button'
          onClick={() => {
            const input = inputRef.current;
            input.click();
          }}
          disabled={props.text.name == "Pix2Pix"}
        >
          {file ? "Plik wczytany" : "Dodaj swój plik"}
          <br />
          {props.text.name == "Pix2Pix" && "Dostępne wkrótce"}
        </button>
      )}
      {file && (
        <button
          className='button'
          onClick={sendToBackend}
        >
          {props.text == "Segmentacja"
            ? "Wygeneruj maski"
            : "Wygeneruj kamienice"}
        </button>
      )}
    </div>
  );
};

export default Card;
