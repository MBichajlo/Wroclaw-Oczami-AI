import "@/styles/globals.css";

export const metadata = {
  title: "Wrocław oczami AI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <body className=''>{children}</body>
    </html>
  );
}
