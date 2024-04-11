import "../components/CreateAd.css";
import { useState } from "react";
export default function CreateAd() {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [description, setDescription] = useState("");
  const [cube, setCube] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  return (
    <section id="create-ad">
      <form action="" id="form">
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
            <label htmlFor="city">Град</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="item item-adress">
            <label htmlFor="adress">Адреса</label>
            <input
              type="text"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
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
            <label htmlFor="cube">Големина</label>
            <input
              type="text"
              value={cube}
              onChange={(e) => setCube(e.target.value)}
              required
            />
          </div>
          <div className="item item-price">
            <label htmlFor="price">Цена</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="item item-quantity">
            <label htmlFor="quantity">Капацитет - лица</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="item item-type">
            <label htmlFor="type">Вид на сместување</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
        </div>
        <div id="inserted-image">
          <input type="file" accept="image/*" />
          <div id="image-preview"></div>
        </div>
        <div id="submit-btn">
          <button type="submit" value="Продолжи" className="submit-form">
            Продолжи
          </button>
        </div>
      </form>
    </section>
  );
}
