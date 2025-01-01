import Image from "next/image";
import "../styles/globals.css";
import style1 from './page.module.css'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import Past from "@/components/past/past";
import Continue from "@/components/continue/continue"


export default function Home() {
  return (
  <>
    <div className={style1.s} >AIRI　MATSUOKA</div>
    <div id="Top" className=""></div>
    <Header/>
    <div id="About" className=""></div>
    <About/>
    <div id="Past" className=""></div>
    <Past/>
    <div id="Continue" className=""></div>
    <Continue/>
    <Footer/>
  </>
  );
}
