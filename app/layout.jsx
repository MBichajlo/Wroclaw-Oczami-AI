import "@/styles/globals.css";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
export const metadata = {
  title: "Wrocław oczami AI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <body className=''>
        <Analytics />
        <SpeedInsights />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
