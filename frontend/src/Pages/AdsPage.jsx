import { useEffect } from "react";
import { useAdsContext } from "../hooks/useAdsContext";
import { Link } from "react-router-dom";

import "../components/Ads.css";
import AdDetails from "../components/AdDetails";
const AdsPage = () => {
  const { ads, dispatch } = useAdsContext();

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
      <div id="filter">
        <button id="create-ad-btn">Барај цимер</button>
      </div>
      <div id="create-ads">
        <button id="create-ad-btn">
          <Link to={"/register"}>Нов Оглас</Link>
        </button>
      </div>
      <div id="display-ads">
        {ads && ads.map((ad) => <AdDetails ad={ad} key={ad._id} />)}
      </div>
    </section>
  );
};

export default AdsPage;
