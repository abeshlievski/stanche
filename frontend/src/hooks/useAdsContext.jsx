import { AdsContext } from "../context/AdsContext";
import { useContext } from "react";

export const useAdsContext = () => {
  const context = useContext(AdsContext);

  if (!context) {
    throw Error("useAdsContext must be used inside a useAdsContext");
  }

  return context;
};
