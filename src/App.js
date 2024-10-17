// import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SelectGroup from "./Components/SelectGroup";
import { UserContextProvider } from "./context/userContext";
import ChatBox from "./Components/ChatBox";
import CreateGroup from "./Components/CreateGroup";





function App() {
  return (
    <div className="App">

   
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selectGroup" element={<SelectGroup />} />
          <Route path="/createGroupPage" element={<CreateGroup />} />
          <Route path="/chatBox" element={<ChatBox />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
    </div>
  );
}

export default App;
