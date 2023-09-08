import React from "react";
import Header from "../Components/Header/Header";
import Faq from "../Components/Section/Section4/FAQ";
import Cards from "../Components/Section/Section3/Cards";
import Reach from "../Components/Section/Section3/Reach";
import "./Home.css";
import Footer from "../Components/Footer/Footer";
import Firstpage from "../Components/Section/Section1/Firstpage";
import Section2 from "../Components/Section/Section2/Section2";

function Home() {
  return (
    <>
      <Header />
      <div className="spacing"></div>
      <Firstpage />
      {/*  <Section1 />
       <Section2 />
       <Section3 />
       <Footer /> */}
      <Section2 />
      <Cards />
      <Reach />
      <Faq />
      <div className="space2"></div>
      <Footer />
      <div className="home"></div>
    </>
  );
}

export default Home;
