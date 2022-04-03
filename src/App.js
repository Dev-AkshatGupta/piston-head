import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {  ExplorePage } from "./pages/ExplorePage/ExplorePage";
import {NavBar} from "./components/NavBar/NavBar";
import {Footer} from "./components/Footer/Footer";
import {Aside} from "./components/aside/Aside";
import { useEffect } from "react";
import {SingleVideoPage} from "./pages/SingleVideoPlayer/SingleVideoPage";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { History } from "./pages/History/History"; 
import { PlayListModal } from "./components/PlayListModal/PlayListModal";
import { useDataValues } from "./contextAndReducers/DataProvider";
import {PlayListPage} from "./pages/PlayList/PlayListPage";
import {Page404} from "./pages/Page-404/Page404";
import axios from "axios";
function App() {
const {modalDisplay, setModalDisplay}=useDataValues();
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
      {modalDisplay&&
      < PlayListModal/>
      }
      <NavBar/>
      <Aside/>
      <Routes>
        <Route path="/" element={<ExplorePage/>}/>
        <Route path="/singleVideo-page/:source" element={<SingleVideoPage/>}/>
        <Route path="/watchLater-page" element ={<WatchLater/>}/>
        <Route path="/history-page" element ={< History/>}/>
        <Route path="/mock" element={<Mockman/>}/>
        <Route path="/playlist-page/:id" element={<PlayListPage/>}/>
        <Route path="*" element={<Page404/>}/>
        {/* <Route path" */}
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
