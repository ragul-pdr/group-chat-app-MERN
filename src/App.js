// import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import ChatBox from "./Components/ChatBox";





function App() {
  return (
    <div >  
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatBox" element={<ChatBox />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
    </div>
  );
}

export default App;
