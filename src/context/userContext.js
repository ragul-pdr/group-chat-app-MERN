import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [username, setUserName] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [groupMessages, setGroupMessages] = useState({});
  const [availableGroups, setAvailableGroups] = useState([
    "ReactJS",
    "NodeJs",
    "MERN",
    "Java",
    "AI",
    "Angular",
    "Python",
   
  ]);

  const addGroup = (newGroup) => {
    if (!availableGroups.includes(newGroup)) {
      setAvailableGroups((prevGroups) => [...prevGroups, newGroup]);
    }
  };

  const addMessageToGroup = (group, newMessage) => {
    setGroupMessages((prev) => ({
      ...prev,
      [group]: [...(prev[group] || []), newMessage],
    }));
  };

 

  return (
    <UserContext.Provider
      value={{
        username,
        setUserName,
        group,
        setGroup,
        message,
        setMessage,
        messages,
        setMessages,
        availableGroups,
        setAvailableGroups,
        groupMessages,
        addMessageToGroup,
        addGroup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
