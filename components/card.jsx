import Image from "next/image";

const Card = (props) => {
  return (
    <div className='create_card '>
      <Image
        src={props.image}
        className='card_background'
      />
      <div className='flex flex-col justify-around items-center h-full'>
        <h1>Stwórz </h1>
        <button className='bg-orange-700 rounded p-2'>Losową kamienice</button>
        <h2>sss</h2>
      </div>
    </div>
  );
};

export default Card;
