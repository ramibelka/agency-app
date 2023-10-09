import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro id="home" />
        <IntroShape />
      </Container>
      <Container id="features">
        {" "}
        {/* Add unique id for Feature section */}
        <Feature />
        <FeatureShape />
      </Container>
      <Container id="services">
        {" "}
        {/* Add unique id for Service section */}
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container id="pricing">
        {" "}
        {/* Add unique id for Pricing section */}
        <Price />
        <PriceShape />
      </Container>
      <Container id="contact">
        {" "}
        {/* Add unique id for Contact section */}
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
