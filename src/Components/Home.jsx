import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import "../CSS/Home.css";

const Home = () => {
  const { username, setUserName } = useUserContext();
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    setUserName(e.target.value);
  }

  function onSubmit() {
    navigate("/chatBox");
  }

  return (
    <div className="login-card">
      <div className="home">
        <h1>Group Chat App</h1>
        <h3>Login</h3>
        <form action="" onSubmit={onSubmit}>
          <input
            className="my-2"
            type="text"
            placeholder="Enter User Name..."
            onChange={handleChange}
            required
          />
          <br />
          <input type="password" placeholder="Enter Password" required />
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
