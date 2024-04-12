import "../components/CreateAd.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from "../hooks/useAuthContext";

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
    <section id="create-ad">
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
          <div className="">
            <h6>Кој тагови најмногу ве опишуваат?</h6>
            <label htmlFor="sport">Sport</label>
            <input
              type="checkbox"
              value="sport"
              onChange={handleChange}
              name="sport"
            />
            <label htmlFor="comp">Computer</label>
            <input
              type="checkbox"
              value="computers"
              onChange={handleChange}
              name="comp"
            />
            <label htmlFor="books">Books</label>
            <input
              type="checkbox"
              value="books"
              onChange={handleChange}
              name="books"
            />
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
