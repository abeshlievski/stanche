import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";
import HubPage from "./Pages/HubPage";
import AdsPage from "./Pages/AdsPage";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import CreateAdsPage from "./Pages/CreateAdsPage";
import EventsPage from "./Pages/EventsPage";
import CreateEventsPage from "./Pages/CreateEventsPage";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hub" element={user ? <HubPage /> : <LogIn />} />
            <Route path="/ads" element={user ? <AdsPage /> : <LogIn />} />
            <Route path="/events" element={user ? <EventsPage /> : <LogIn />} />
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
            <Route
              path="/createevent"
              element={user ? <CreateEventsPage /> : <LogIn />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
