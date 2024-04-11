import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdsPage from "./Pages/AdsPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LandingPage from "./Pages/LandingPage";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ads" element={<AdsPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
