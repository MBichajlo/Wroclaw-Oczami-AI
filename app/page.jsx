import Image from "next/image";
import kamienice from "@/public/images/kaamienice.png";
import Navbar from "@/components/navbar.jsx";

const Home = () => {
  return (
    <main className='flex-col justify-between items-center  flex sm:min-h-screen'>
      {/* <Navbar /> */}
      <Image
        // src={"/images/kaamienice.png"}
        className='object-contain kamienice_photo'
        src={kamienice}
        alt='Zdjęcie rzędu kamienic'
      />
    </main>
  );
};

export default Home;
