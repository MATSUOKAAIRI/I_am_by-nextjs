import "../styles/globals.css";
import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import University from "@/components/university/university";
import Doing from "@/components/do/do";
import Action from "@/components/action/action";
import Work from "@/components/work/work";

export default function Home() {

  return (
  <div className="bg-gray-600 overflow-x-hidden">
    <Hero/>
    <Header/>
    <div id="about"></div>
    <About/>
    <div id="university"></div>
    <University/>
    <div id="doing"></div>
    <Doing/>
    <div id="action"></div>
    <Action/>
    <div id="work"></div>
    <Work/>
    <Footer/>
  </div>
  );
}
