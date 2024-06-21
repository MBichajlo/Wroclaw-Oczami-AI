import React from "react";

const page = () => {
  return (
    <div className='flex flex-col justify-center m-9 text-3xl text-midnight-green h-5/6'>
      <p>
        NeoFacade to zbiór 400 zaanotowanych wrocławskich kamienic z XIX i XX
        wieku, stworzony we współpracy ze studentami Wydziału Architektury.
      </p>
      <div className='h-12' />
      <p className='flex flex-col'>
        Anotacja polega na oznaczeniu trzech typów informacji w trzech kanałach
        przestrzeni RGB:
        <span>{">"} R - podstawowe elementy (drzwi, okna)</span>
        <br />
        <span>{">"} G - typy elementów (prostokątne, okrągłe)</span>
        <br />
        <span>{">"} B - style elementów (neobarok, secesja)</span>
        <br />
        Publiczne udostępnienie zbioru jest planowane na sierpień 2024.
      </p>
    </div>
  );
};

export default page;
