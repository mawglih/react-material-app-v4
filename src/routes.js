import { Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import Services from './components/ui/Services';
import Revs from './components/ui/Revs';
import About from './components/ui/About';
import Contact from './components/Contact';
import Websites from './components/Websites';
import Mobile from './components/Mobile';
import Custom from './components/Custom';
import Estimate from "./components/Estimate";

const MyRoutes = () => (
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/revs" element={<Revs />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/websites" element={<Websites />} />
    <Route path="/mobile" element={<Mobile />} />
    <Route path="/custom" element={<Custom />} />
    <Route path="/estimate" element={<Estimate />} />
  </Routes>
);

export default MyRoutes;
