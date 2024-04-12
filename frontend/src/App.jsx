import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import AdsPage from "./Pages/AdsPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import LandingPage from "./Pages/LandingPage";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import CreateAdsPage from "./Pages/CreateAdsPage";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ads" element={user ? <AdsPage /> : <LogIn />} />
            <Route
              path="/login"
              element={!user ? <LogIn /> : <LandingPage />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <LandingPage />}
            />
            <Route
              path="/createad"
              element={user ? <CreateAdsPage /> : <LogIn />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
