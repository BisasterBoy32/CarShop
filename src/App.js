import React from 'react';
import Header from "./components/header";
import Slider from "./components/slider";
import CarContent from "./components/main/carcontent";
import Desc from "./components/description";
import Related from "./components/related"; 
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Header />
    <Slider />
      <CarContent />
      <Desc />
      <Related />
      <Footer />
    </>
  );
}

export default App;
