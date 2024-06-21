import Image from "next/image";
import kamienice from "@/public/images/kaamienice.png";
import Navbar from "@/components/navbar.jsx";

const Home = () => {
  return (
    <main className='flex-col justify-between flex sm:min-h-screen text-midnight-green'>
      {/* <Navbar /> */}
      <div className='w-100 m-9 mt-0 ml-20 text-4xl  flex flex-col'>
        <p className='w-2/3 self-start text-justify'>
          „Wrocław Oczami AI” to odpowiedź sztucznej inteligencji na potrzeby
          wrocławskich architektów. Projektowanie historyczych fasad kamienic
          jest czasochłonnym procesem, wymagającym spełnienia szeregu
          parametrów: stylowych, technicznych, prawnych i konserwatorskich.
          Stworzyliśmy podstawy systemu wspomagającego architekta przy pracy.
        </p>
        <div className='h-7'></div>
        {/* <p className='w-2/3  '>W ramach projektu powstały dwa artykuły:</p> */}
        {/* <li>
          A. Marcinów et al., “Building a Dataset of Wrocław's Historic
          Tenements: Image Annotation for Machine Learning Applications”,
          Submitted to Architectus, WRUT Publishing House, 2024.
        </li>
        <li>
          B. Kowalska, et al., “Analysis of the New Architectural Dataset
          NeoFacade and Its Potential in Machine Learning”, Submitted to:
          Architectus, WRUT Publishing House, 2024.
        </li> */}
      </div>
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
