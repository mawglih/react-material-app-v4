import { Route, Routes } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import ServicesPage from './components/Pages/ServicesPage';
import Revs from './components/ui/Revs';
import AboutPage from './components/Pages/AboutPage';
import Contact from './components/Pages/ContactPage';
import Websites from './components/Websites';
import Mobile from './components/Mobile';
import Custom from './components/Custom';
import Estimate from "./components/Estimate";

const MyRoutes = () => (
  <Routes>
    <Route index path="/" element={<HomePage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/revs" element={<Revs />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/websites" element={<Websites />} />
    <Route path="/mobile" element={<Mobile />} />
    <Route path="/custom" element={<Custom />} />
    <Route path="/estimate" element={<Estimate />} />
  </Routes>
);

export default MyRoutes;
