import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel app for camping",
};

type Readonly={
    children: React.ReactNode;
}
export default function RootLayout({children,}:Readonly) {
  return (
    <html lang="en">
      <body>
        < Navbar />
        <main className="">
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
