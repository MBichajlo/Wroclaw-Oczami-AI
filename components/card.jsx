"use client";
import NextImage from "next/image";
import SouthIcon from "@mui/icons-material/South";
import { createContext, useContext, useEffect, useRef, useState } from "react";

import axios from "axios";

const Card = (props) => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
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

    if (props.text == "Segmentacja") {
      formData.append("file", file);
      try {
        const results = await fetch("/api/segmentation", {
          method: "POST",
          body: formData,
        });
        const data = await results.json();
        // props.startLoading(false);
        props.setMasks(data.masks);
        props.startLoading(false);
      } catch (error) {
        props.startLoading(false);
        alert(error.data.error);
      }
    }

    if (props.text == "Pix2Pix") {
      props.startLoading(true);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        formData.append("data", reader.result);
        try {
          const results = await fetch("/api/pix2pix", {
            method: "POST",
            body: formData,
          });
          console.log(results);
        } catch (er) {
          console.log(er);
        }
      };

      props.startLoading(false);
    }
  }

  return (
    <div className='create_card flex flex-col justify-around items-center'>
      <NextImage
        src={props.image}
        className='card_background'
      />
      {/* <div className='flex flex-col justify-around items-center h-full'>
        <h1>Stwórz </h1>
        <button className='bg-orange-700 rounded p-2'>Losową kamienice</button>
        <h2>sss</h2>
      </div> */}

      <h1>{props.text}</h1>
      <h2>Obraz</h2>
      <SouthIcon />
      <h2>Model</h2>

      <SouthIcon />
      <h2>Maska</h2>
      <input
        ref={inputRef}
        type='file'
        name='image'
        id='image'
        accept='image/*'
        onChange={handleChange}
        hidden
      />
      <button
        className='button'
        onClick={() => {
          const input = inputRef.current;
          input.click();
        }}
      >
        {file ? "Plik wczytany" : "Dodaj swój plik"}
      </button>

      {file && (
        <button
          className='button'
          onClick={sendToBackend}
        >
          Wygeneruj Maski
        </button>
      )}
    </div>
  );
};

export default Card;
