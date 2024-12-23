import { Route, Routes, useLocation } from "react-router";
import "./App.css"

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}