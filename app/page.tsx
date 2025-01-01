import Image from "next/image";
import "../styles/globals.css";
import style1 from './page.module.css'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import Continue from "@/components/continue/continue"


export default function Home() {
  return (
  <>
    <div className={style1.s} >AIRI　MATSUOKA</div>
    <Header/>
    <About/>
    <Continue/>
    <Footer/>
  </>
  );
}
