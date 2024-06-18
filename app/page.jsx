import Image from "next/image";
import kamienice from "@/public/images/kaamienice.png";
import Navbar from "@/components/navbar.jsx";

const Home = () => {
  return (
    <main className='flex-col justify-between flex sm:min-h-screen'>
      {/* <Navbar /> */}
      <div className='w-100 m-9 text-2xl flex flex-col'>
        <p className='w-2/3 self-start'>
          „Wrocław Oczami AI” to odpowiedź sztucznej inteligencji na potrzeby
          wrocławskich architektów. Projektowanie historyczych fasad kamienic
          jest czasochłonnym procesem, wymagającym spełnienia szeregu
          parametrów: stylowych, technicznych, prawnych i konserwatorskich.
          Stworzyliśmy podstawy systemu wspomagającego architekta przy pracy.
        </p>
        <div className='h-7'></div>
        <p className='w-2/3  '>
          W ramach projektu powstały dwa artykuły: A. Marcinów et al., “Building
          a Dataset of Wrocław's Historic Tenements: Image Annotation for
          Machine Learning Applications”, Submitted to Architectus, WRUT
          Publishing House, 2024. B. Kowalska, et al., “Analysis of the New
          Architectural Dataset NeoFacade and Its Potential in Machine
          Learning”, Submitted to: Architectus, WRUT Publishing House, 2024.
        </p>
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
