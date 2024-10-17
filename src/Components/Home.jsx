import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import '../CSS/Home.css'

const Home = () => {

  const {username, setUserName} = useUserContext();
  const navigate = useNavigate();

    function handleChange(e){
        e.preventDefault();
        setUserName(e.target.value);
    }

  function onSubmit() {
    // console.log(username)
    navigate("/selectGroup");
    // setUserName("")
  }

  return (
    <div className="home">
      <h1>Group Chat App</h1>
      <input
        className="my-2"
        type="text"
        placeholder="Enter User Name..."
        value={username}
        onChange={handleChange}
        required
      />
      <br />
      <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Home;
