import Image from "next/image";
import SouthIcon from "@mui/icons-material/South";
const Card = (props) => {
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
      <SouthIcon />
      <h2>Maska</h2>
    </div>
  );
};

export default Card;
