import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AppLayout from "./ui/AppLayout";
import ContactUs from "./Components/Home/ContactUs";
import AboutUs from "./Components/Home/AboutUs";
import Careers from "./Components/Home/Careers";
import Services from "./Components/Home/Services";
import Portfolio from "./Components/Home/Portfolio";
import Automotive from "./Components/ServicesPages/Automotive";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Automotive" element={<Automotive />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}
