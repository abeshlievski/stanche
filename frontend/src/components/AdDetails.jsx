import { useAdsContext } from "../hooks/useAdsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const AdDetails = ({ ad }) => {
  const { dispatch } = useAdsContext();
  const { user } = useAuthContext();
  const user_id = user._id;

  const handleClick = async () => {
    const response = await fetch("/api/ads/" + ad._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_AD", payload: json });
    }
  };

  return (
    <div>
      {user_id === ad.user_id && <span onClick={handleClick}>delete</span>}
      <h1>{ad.title}</h1>
      <img src={ad.img} alt="" />
      <h3>
        Локација: {ad.location} - Тип на објект:{" "}
        {ad.type === "stan" ? "стан" : "куќа"}
      </h3>
      <h2>Повеќе информации:{ad.description}</h2>
      <h2>
        Квадратура:{ad.cube}cm2 - Цена:{ad.price}$/месечно
      </h2>
      <span>Објавено од : {ad.createdBy}</span>
      <p>{formatDistanceToNow(new Date(ad.createdAt), { addSuffix: true })}</p>
    </div>
  );
};

export default AdDetails;
