import React from "react";
// import applications from "@public/pdfs/NF_applications.pdf";
import { Article } from "@mui/icons-material";

import Image from "next/image";
const page = () => {
  return (
    <div className='m-0 text-midnight-green'>
      <p className='m-4 text-3xl'>
        Zbiór NeoFacade i jego zastosowania w SI zostały zaprezentowane na
        konferencji ArchReSci 2024. <br />
        <a
          className='hover:text-yellow'
          href='/pdfs/prezentacja.pdf'
          target='_blank'
        >
          {" "}
          <Article></Article> Zbiór elewacji kamienic historycznych
        </a>{" "}
        <br />
        <br />
        Dodatkowo, jako zespół interdyscyplinarny zgłosiliśmy dwie publikacje do
        czasopisma Architectus. <br />
        <a
          className='hover:text-yellow'
          href='/pdfs/NF_dataset.pdf'
          target='_blank'
        >
          <Article></Article> NeoFacade: Wrocław's Tenement Dataset
        </a>
        <br />
        <a
          className='hover:text-yellow'
          href='/pdfs/NF_applications.pdf'
          target='_blank'
        >
          <Article></Article> NeoFacade: AI Applications
        </a>
      </p>
      <div className='h-8'></div>
      <Image
        src={"/images/loga/logo kolor 2024.png"}
        width={200}
        height={100}
        className='m-auto'
      ></Image>
    </div>
  );
};

export default page;
