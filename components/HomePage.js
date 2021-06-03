import React from "react";
import Hero from "./Home/Hero_component/Hero";
import Footer from "./Home/Screen1_Footer/Footer";
import Screen3 from "./Home/Screen3/Screen3";
import TopQuestion from "./Home/subscribe_component/topQuestion";
import Subscribe from "./Home/subscribe_component/subscribe";
import Title2 from "./Home/Title_two_comp/title2";
import Screen4 from "./Home/Screen4/Screen4";
function HomePage() {
  console.log("THE HOMEPAGE COMPONENT");
  return (
    <div
      id="homePage"
      className="container mx-auto mt-30 md:container md:mx-auto"
    >
      <div className="my-48">
        <Hero />
      </div>
      {/* Title-1 component */}
      <div className="my-48">
        <Footer />
      </div>
      <div className="my-48">
        <Title2 />
      </div>
      {/* Title-3 component */}
      <div className="my-48">
        <Screen3 />
      </div>
      {/* Title-3 ==> How it works */}
      <div className="my-48">
        <Screen4 />
      </div>
      {/* Top Questions component */}
      <div className="my-48">
        <TopQuestion />
        <TopQuestion />
        <TopQuestion />
        <TopQuestion />
      </div>
      {/* Top Questions component */}
      <div className="my-48">
        <Subscribe />
      </div>
    </div>
  );
}

export default HomePage;
