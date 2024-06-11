import "@/styles/globals.css";
import Navbar from "@components/navbar";

export const metadata = {
  title: "Wrocław oczami AI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <body className=''>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
