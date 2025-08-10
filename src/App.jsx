import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admissions from "./pages/Admissions";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
