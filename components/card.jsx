import Image from "next/image";
import kamienica1 from "../public/images/jn77.png";
import kamienica2 from "../public/images/nk29.png";
import kamienica3 from "../public/images/nw10.png";

const Card = () => {
  return (
    <div className='create_card text-center'>
      <Image
        src={kamienica1}
        className='card_background'
      />
      AAA
    </div>
  );
};

export default Card;
