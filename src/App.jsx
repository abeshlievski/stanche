import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import Ads from "./Pages/Ads";
function App() {
  return (
    <>
      <NavBar />
      {/* <LogIn /> */}
      {/* <LandingPage /> */}
      {/* <Register /> */}
      <Ads />

      <Footer />
    </>
  );
}

export default App;
