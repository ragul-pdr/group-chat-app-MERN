import React, { useEffect, useRef, useState } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import "../CSS/ChatBox.css";

const ChatBox = () => {
  const chatListRef = useRef(null);
  const {
    username,
    setUserName,
    message,
    setMessage,
    groupMessages,
    addMessageToGroup,
    availableGroups,
    setAvailableGroups,
  } = useUserContext();

  const [selectedChat, setSelectedGroup] = useState("");
  const navigate = useNavigate();

  const setGroupFunction = (groupName) => {
    setSelectedGroup(groupName);
    setMessage("");
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      const time = new Date().toLocaleTimeString();
      const newMessage = { text: message, time, user: username };
      addMessageToGroup(selectedChat, newMessage);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [groupMessages]);

  const getLastMessage = (groupName) => {
    const messages = groupMessages[groupName] || [];
    return (
      messages[messages.length - 1] || {
        text: "No Chats Here!",
        time: "",
        user: "",
      }
    );
  };

  const createGroup=(e)=>{
    const newGroup= prompt("Enter Group Name: ")
    if(newGroup){
     
     setAvailableGroups([...availableGroups,newGroup])
    }
    
  }

  const createNewUser=()=>{
   navigate('/')
  }

  return (
    <>
      <div className="selectGroup container-fluid">
        <div className="select-grp-top row">
          <div className="col-4">
            <p>
              GROUP NAME: <strong>{selectedChat || "None Selected"}</strong>
            </p>
          </div>
          <div className="col-4">
            <button className="btn btn-warning" onClick={createGroup}>Create New Group</button>&nbsp;
            <button style={{backgroundColor:"green"}} className="btn" onClick={createNewUser}>Add New User</button>
          </div>
          <div className="col-4">
            <p>
              USER NAME: <strong>{username}</strong>
            </p>
          </div>
        </div>

        <div className="group-show row d-flex">
          <div className="col-3 group-left">
            <ul>
              {availableGroups.map((groupName, index) => {
                const lastMessage = getLastMessage(groupName);
                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setGroupFunction(groupName);
                    }}
                  >
                    <a href="#" style={{ cursor: "pointer" }}>
                      {groupName}
                      <div style={{ fontSize: "12px" }}>
                        <strong>{lastMessage.user}</strong>: {lastMessage.text}
                        " {lastMessage.time}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-9 group-right p-2">
            {selectedChat === "" ? (
              <div className="chat-list before-chat">
                <h2>Select Group and Chat...</h2>
              </div>
            ) : (
              <div className="after-chat">
                <div className="chat-list" ref={chatListRef}>
                  <ul>
                    {(groupMessages[selectedChat] || []).map((msg, index) => (
                      <li
                        key={index}
                        className={
                          msg.user === username
                            ? "message-right"
                            : "message-left"
                        }
                      >
                        {msg.user}: {msg.text} [{msg.time}]
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="send-msg p-2">
                  <input
                    id="input"
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                  />
                  <button
                    className="btn btn-success p-2"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
