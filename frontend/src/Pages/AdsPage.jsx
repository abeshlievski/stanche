import "../components/Ads.css";
import { useEffect } from "react";
import { useAdsContext } from "../hooks/useAdsContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import AdDetails from "../components/AdDetails";
const AdsPage = () => {
  const { user } = useAuthContext();
  const { ads, dispatch } = useAdsContext();
  if (user.role === "student") {
    return <div className="error">ЗАБРАНЕТ ПРИСТАП</div>;
  }

  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch("/api/ads");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_ADS", payload: json });
      }
    };

    fetchAds();
  }, [dispatch]);

  return (
    <section id="ads-page">
      <button id="create-ad-btn">
        <Link to={"/createad"} style={{ textDecoration: "none" }}>
          Нов Оглас
        </Link>
      </button>
      <div id="display-ads">
        {ads && ads.map((ad) => <AdDetails ad={ad} key={ad._id} />)}
      </div>
    </section>
  );
};

export default AdsPage;
