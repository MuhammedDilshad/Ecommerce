import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Product from "../../components/Product/Product";
import IconDetails from "../../components/IconDetails/IconDetails";
import Advertmnt from "../../components/Advertmnt /Advertmnt ";
import TopSellers from "../../components/TopSellers/TopSellers";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Product />
      <IconDetails />
      <Advertmnt />
      <TopSellers />
      <Footer />
    </div>
  );
}

export default Home;
