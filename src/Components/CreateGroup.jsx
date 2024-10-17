import React from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import '../CSS/CreateGroup.css'


const CreateGroup = () => {
  const { group, setGroup, addGroup } = useUserContext();
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    if (group.trim()) {
      addGroup(group);
    //   setGroup("");
      navigate("/chatBox");
    } else {
      alert("Group name cannot be empty!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  const handleInputChange = (e) => {
    // e.preventDefault();
    setGroup(e.target.value);
  };
  return (
    <div className="home">
      <h1>Create Group Page</h1>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Enter Group name..."
          value={group}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="my-2"
        />
        <br />
        <input className="btn btn-info my-3" type="submit" value="Create!" />
      </form>
    </div>
  );
};

export default CreateGroup;
