import "../components/CreateAd.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdsContext } from "../hooks/useAdsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function CreateAd() {
  const navigate = useNavigate();
  const { dispatch } = useAdsContext();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [cube, setCube] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("stan");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = user._id;
    const createdBy = user.name + " " + user.surname;
    const user_email = user.email;
    const ad = {
      title,
      location,
      address,
      description,
      cube,
      price,
      quantity,
      type,
      user_id,
      createdBy,
      user_email,
    };
    console.log(ad);
    const response = await fetch("/api/ads", {
      method: "POST",
      body: JSON.stringify(ad),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      dispatch({ type: "CREATE_AD", payload: json });
      navigate("/ads");
    }
  };

  return (
    <section id="create-ad">
      <h1>Креирај оглас:</h1>
      <form action="" id="form" onSubmit={handleSubmit} noValidate>
        <div id="item-fields">
          <div className="item item-title">
            <label htmlFor="title">Наслов</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="item item-town">
            <label htmlFor="location">Град</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="item item-adress">
            <label htmlFor="adress">Адреса</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="item item-description">
            <label htmlFor="description">Опис</label>
            <textarea
              rows="14"
              cols="10"
              wrap="soft"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="item item-cube">
            <label htmlFor="cube">
              Големина (m<sup>2</sup>)
            </label>
            <input
              type="number"
              value={cube}
              onChange={(e) => setCube(e.target.value)}
              required
            />
          </div>
          <div className="item item-price">
            <label htmlFor="price">Цена (&euro;/месечно)</label>
            <input
              type="number"
              min="1"
              step="any"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="item item-quantity">
            <label htmlFor="quantity">Капацитет - лица</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="item item-type">
            <label htmlFor="type">Вид на сместување</label>
            <select name="type" onChange={(e) => setType(e.target.value)}>
              <option value="stan">Стан</option>
              <option value="kukja">Куќа</option>
            </select>
          </div>
        </div>
        <div id="submit-btn">
          <button className="submit-form">Продолжи</button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </section>
  );
}
