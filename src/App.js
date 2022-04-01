import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {  ExplorePage } from "./pages/ExplorePage/ExplorePage";
import {NavBar} from "./components/NavBar/NavBar";
import {Footer} from "./components/Footer/Footer";
import {Aside} from "./components/aside/Aside";
import { useEffect } from "react";
import {SingleVideoPage} from "./pages/SingleVideoPlayer/SingleVideoPage";
import axios from "axios";
function App() {
  useEffect(
       async () => {
      try {
        const response = await axios.post("/api/auth/login", {
              email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
        });
        console.log(response.data.foundUser);
        localStorage.setItem("token", response.data.encodedToken);
      } catch (error) {
        console.log(error);
      }
    
  },[])
  return (
    <div className="App">
      <NavBar/>
      <Aside/>
      <Routes>
        <Route path="/" element={<ExplorePage/>}/>
        <Route path="/singleVideo-page" element={<SingleVideoPage/>}/>
        <Route path="/singleVideo-page/:source" element={<SingleVideoPage/>}/>
        <Route path="/mock" element={<Mockman/>}/>
        
      </Routes>
    <Footer/>
    </div>

  );
}

export default App;
