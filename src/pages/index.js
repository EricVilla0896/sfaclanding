import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "../pages/components/Navbar";
import HeroSection from "./components/HeroSection";



export default function Home() {
  return (
  <div className="ms-auto p-5">
    <HeroSection/>
    </div>
  );
}
