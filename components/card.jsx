"use client";
import Image from "next/image";
import SouthIcon from "@mui/icons-material/South";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Card = (props) => {
  const [file, setFile] = useState(null);

  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log(file);
  }

  async function sendToBackend() {
    const formData = new FormData();
    formData.append("file", file);
    const results = await fetch("http://localhost:3000/api/segmentation", {
      method: "POST",
      body: formData,
    });
    const data = await results.json();
    props.setMasks(data.masks);
  }

  return (
    <div className='create_card flex flex-col justify-around items-center'>
      <Image
        src={props.image}
        className='card_background'
      />
      {/* <div className='flex flex-col justify-around items-center h-full'>
        <h1>Stwórz </h1>
        <button className='bg-orange-700 rounded p-2'>Losową kamienice</button>
        <h2>sss</h2>
      </div> */}
      <h1>Segmentacja</h1>
      <h2>Obraz</h2>
      <SouthIcon />
      <h2>Model</h2>
      <input
        type='file'
        name='image'
        id='image'
        accept='image/*'
        onChange={handleChange}
      />

      {file && <button onClick={sendToBackend}>SUBM I T !!!</button>}
      <SouthIcon />
      <h2>Maska</h2>
    </div>
  );
};

export default Card;
