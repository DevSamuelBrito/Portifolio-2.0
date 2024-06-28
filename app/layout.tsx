import { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "DevSamuelBrito",
  description: "Portifolio of Samuel Brito",
};
