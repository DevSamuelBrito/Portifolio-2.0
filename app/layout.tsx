import { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/NavBar";
import {Inter} from "next/font/google";

const FontInter = Inter({
  weight: ["300","400","700"],
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={FontInter.className}>
        {/* <Navbar /> */}
        {children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "DevSamuelBrito",
  description: "Portifolio of Samuel Brito",
};
