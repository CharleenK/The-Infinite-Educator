import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Services from "./pages/Services";
import LearningEvents from "./pages/LearningEvents";
// import Contact from "./pages/Contact";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/services" element={<Services />} />
        <Route path="/learning" element={<LearningEvents />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};
export default App;
