import Image from "next/image";
import "../styles/globals.css";
import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import University from "@/components/university/university";
import Do from "@/components/do/do"


export default function Home() {
  return (
  <>
  
  <div id="Header"></div>
  <Hero/>
   <Header/>
    <div id="About"></div>
    <About/>
    <div id="University"></div>
    <University/>
    <div id="Do"></div>
    <Do/>
    <Footer/>
  </>
  );
}
