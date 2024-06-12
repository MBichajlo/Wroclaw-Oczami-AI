import React from "react";
import Card from "@components/card";
import kamienice from "@util/photoimport";
const page = () => {
  return (
    <div className='flex h-lvh  items-center '>
      {kamienice.map((kamienica) => {
        return (
          <Card
            key={kamienica}
            image={kamienica}
          />
        );
      })}
    </div>
  );
};

export default page;
