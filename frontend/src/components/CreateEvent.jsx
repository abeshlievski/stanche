import "../components/CreateAd.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "./CreateEvent.css";

export default function CreateAd() {
  const navigate = useNavigate();
  const { dispatch } = useEventsContext();
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  function handleChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setTags((pre) => [...pre, value]);
    } else {
      setTags((pre) => {
        return [...pre.filter((tag) => tag === value)];
      });
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = user._id;
    const createdBy = user.name + " " + user.surname;
    const event = {
      title,
      location,
      description,
      user_id,
      createdBy,
      tags,
    };
    console.log(event);
    const response = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      dispatch({ type: "CREATE_EVENT", payload: json });
      navigate("/events");
    }
  };

  return (
    <section id="create-event">
      <form action="" id="form" onSubmit={handleSubmit} noValidate>
        <div id="event-fields">
          <div className="item item-title">
            <label htmlFor="title">Наслов</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="item ">
            <label htmlFor="location">Во кој град барате цимер?</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="create-traits">
            <h6>Кој карактеристики најмногу ве опишуваат?</h6>
            <div>
              <div>
                <label htmlFor="sport">Спортист</label>
                <input
                  type="checkbox"
                  value="Спортист"
                  onChange={handleChange}
                  name="sport"
                />
              </div>

              <div>
                <label htmlFor="loveAnimals">Сакам животни</label>
                <input
                  type="checkbox"
                  value="Сакам животни"
                  onChange={handleChange}
                  name="loveAnimals"
                />
              </div>
              <div>
                <label htmlFor="books">Читам Книги</label>
                <input
                  type="checkbox"
                  value="Читам книги"
                  onChange={handleChange}
                  name="books"
                />
              </div>
              <div>
                <label htmlFor="party">Сакам забави</label>
                <input
                  type="checkbox"
                  value="Сакам забави"
                  onChange={handleChange}
                  name="party"
                />
              </div>
              <div>
                <label htmlFor="alchohol">"Алкохоличар"</label>
                <input
                  type="checkbox"
                  value="Алкохоличар"
                  onChange={handleChange}
                  name="alchohol"
                />
              </div>
              <div>
                <label htmlFor="privacy">Сакам Приватност</label>
                <input
                  type="checkbox"
                  value="privacy"
                  onChange={handleChange}
                  name="privacy"
                />
              </div>
              <div>
                <label htmlFor="cooking">Добро готвам</label>
                <input
                  type="checkbox"
                  value="Добро готвам"
                  onChange={handleChange}
                  name="cooking"
                />
              </div>
            </div>
          </div>
          <div className="item item-description">
            <label htmlFor="description">Повеќе информации за вас</label>
            <textarea
              rows="14"
              cols="10"
              wrap="soft"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div id="submit-btn">
          <button className="submit-form">Продолжи</button>
        </div>
      </form>
    </section>
  );
}
