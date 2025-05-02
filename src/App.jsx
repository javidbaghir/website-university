import { useState } from "react";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Testimonials from "./components/testimonials/Testimonials";
import Title from "./components/title/Title";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

function App() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Title subTitle={"Our Program"} title={"What we offer"} />
        <Programs />
        <About setPlayVideo={setPlayVideo} />
        <Title subTitle={"Gallery"} title={"Course Photos"} />
        <Campus />
        <Title subTitle={"Testimonials"} title={"What Students say"} />
        <Testimonials />
        <Title subTitle={"Contact Us"} title={"Get in Touch"} />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
    </>
  );
}

export default App;
