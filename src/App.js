import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import * as io from "socket.io-client"

const socket = io.connect('http://hypescreen.eu-4.evennode.com');
function App() {
  return <BrowserRouter>

  
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Home' element={<Home socket={socket} />} />
    </Routes>
  </BrowserRouter>
}

export default App;
