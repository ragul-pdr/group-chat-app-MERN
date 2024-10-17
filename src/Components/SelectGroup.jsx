import React from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import '../CSS/SelectGroup.css'


const SelectGroup = () => {
  const { username, group, setGroup, availableGroups } =
    useUserContext();
  const navigate = useNavigate();

  const createGroupPage = () => {
    navigate("/createGroupPage");
  };

  const setGroupFunction = (e) => {
    setGroup(e.target.value);
  };

  const goChatBox = () => {
    if (group) {
      // setGroup("");
      navigate("/chatBox");
    } else {
      alert("Please select a group!");
    }
  };

  return (
    <div className="home">
      <div>
        <h1>Select (or) Create Group</h1>
        <p>User Name : {username}</p>
      </div>
      <div className="col-md-6">
        <select id="selectGroup" value={group} onChange={setGroupFunction}>
          <option value="">Select Group</option>
          {availableGroups.map((e, index) => (
            <option key={index} value={e}>
              {e}
            </option>
          ))}
        </select>
        <button id="gobtn" className="btn btn-dark" onClick={goChatBox}>Go</button>
      </div>
            <h4 className="my-3">(or)</h4>
      <div className="col-md-6 my-3">
        <button className="btn btn-info" onClick={createGroupPage}>
          Create Group
        </button>
      </div>
    </div>
  );
};

export default SelectGroup;
