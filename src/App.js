import "./App.css";
import { ChatEngine } from "react-chat-engine";
import Login from "./Login";

function App() {
  if(!localStorage.getItem('username')) return <Login/>
  return (
      <ChatEngine
        height="100vh"
        projectID="6b48e449-56fb-4473-bd4f-1383d2bcb003"
        userName= {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
      />
  );
};

export default App;
