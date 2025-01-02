import Image from "next/image";
import "../styles/globals.css";
import style1 from './page.module.css'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import Do from "@/components/do/do"


export default function Home() {
  return (
  <>
  <div id="Header" className=""></div>
   <Header/>
    <div id="About" className=""></div>
    <About/>
    <div id="Do" className=""></div>
    <Do/>
    <Footer/>
  </>
  );
}
