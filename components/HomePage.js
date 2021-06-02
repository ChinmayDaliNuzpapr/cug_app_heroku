import React from "react";
import Hero from "./Home/Hero_component/Hero";
import Footer from "./Home/Screen1_Footer/Footer";
import Screen3 from "./Home/Screen3/Screen3";
import TopQuestion from "./Home/subscribe_component/topQuestion";
import Subscribe from "./Home/subscribe_component/subscribe";
function HomePage() {
  return (
    <div id="homePage" className="container mx-auto mt-30">
      <div className="mt-30 mb-30">
        <Hero />
      </div>
      <div className="mt-30 mb-30">
        <Footer />
      </div>
      <div className="mt-30 mb-30">
        <Screen3 />
      </div>
      <div className="mt-30 mb-30">
        <TopQuestion />
      </div>
      <div className="mt-30 mb-30">
        <Subscribe />
      </div>
    </div>
  );
}

export default HomePage;
