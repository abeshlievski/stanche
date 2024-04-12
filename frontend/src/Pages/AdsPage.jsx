import { useEffect } from "react";
import { useAdsContext } from "../hooks/useAdsContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import AdDetails from "../components/AdDetails";
const AdsPage = () => {
  const { user } = useAuthContext();
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
  let content;
  if (user.role === "izdavac") {
    content = (
      <button id="create-ad-btn">
        <Link to={"/createad"}>Нов Оглас</Link>
      </button>
    );
  } else {
    content = (
      <div id="filter">
        <button id="create-ad-btn">Барај цимер</button>
      </div>
    );
  }

  return (
    <section id="ads-page">
      {content}
      <div id="display-ads">
        {ads && ads.map((ad) => <AdDetails ad={ad} key={ad._id} />)}
      </div>
    </section>
  );
};

export default AdsPage;
