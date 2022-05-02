import React from "react";
import './App.css';
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import First from "../Qualifications/First";
import Second from "../Qualifications/Second";
import Third from "../Qualifications/Third";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
    <Header />
    <br />
    <Introduction />
    <br />
    <First />
    <br />
    <Second />
    <br />
    <Third />
    <br />
    <Contact />
    <br />
    <Footer />
    </>
  );
}

export default App;
