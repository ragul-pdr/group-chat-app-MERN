import React, { useEffect, useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import "../CSS/ChatBox.css";

const ChatBox = () => {
  const chatListRef = useRef(null);

  const {
    username,
    group,
    message,
    setMessage,
    groupMessages,
    addMessageToGroup,
  } = useUserContext();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const time = new Date().toLocaleTimeString();
      const newMessage = { text: message, time, user: username };
      addMessageToGroup(group, newMessage);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const goHome = () => {
    navigate("/");
  };

  const goSelectGroupPage = () => {
    navigate("/selectGroup");
  };

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [groupMessages]);
  return (
    <div className="chat">
      <div className="chat-head">
        <h1>Chat Box</h1>
        <div className="button-container my-1">
          <button className="btn btn-danger mx-2" onClick={goHome}>
            Logout
          </button>
          <button className="btn btn-warning" onClick={goSelectGroupPage}>
            Change Group
          </button>
        </div>
        <div className="info-container d-flex">
          <p>
            GROUP NAME: <strong>{group}</strong>
          </p>
          <p>
            USER NAME: <strong>{username}</strong>
          </p>
        </div>
      </div>
      <div className="chat-list" ref={chatListRef}>
        <ul>
          {(groupMessages[group] || []).map((msg, index) => (
            <li
              key={index}
              className={
                msg.user === username ? "message-right" : "message-left"
              }
            >
              {msg.user}: {msg.text} [{msg.time}]
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-send-section p-3">
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
          <button className="btn btn-success" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
