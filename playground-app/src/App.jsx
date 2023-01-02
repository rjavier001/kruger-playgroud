import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
