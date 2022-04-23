import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';
import Revs from './components/Revs';
import About from './components/About';
import Contact from './components/Contact';
import HeaderAppBar from "./components/ui/AppBar";

const MyRoutes = () => {
  return (
    <>
    <HeaderAppBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/revs" element={<Revs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
      
  )

}

export default MyRoutes;
