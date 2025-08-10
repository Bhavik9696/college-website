import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admissions from "./pages/Admissions";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";



function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />

        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
