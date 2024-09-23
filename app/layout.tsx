import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata: Metadata = {
  title: "AirBnB clone | Allan Alton",
  description: "AirBnB Website clone by Allan Alton",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}> 
        <RegisterModal />
        <Navbar />
        {children} 
      </body>
    </html>
  );
}
