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
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { LogInPage } from "./pages/Log-In-Page/LogInPage";
import {Toast} from "./components/Toast/Toast";
import { useAuthorization } from "./contextAndReducers/AuthProvider";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
function App() {
const {modalDisplay, setModalDisplay}=useDataValues();
const {authState,authDispatch }=useAuthorization();
useEffect(()=>{
 
const timeoutID= setTimeout(()=> {authDispatch({
        type: "TOAST",
        payload: { display:"none", message: "", type: "" },
   
      });clearTimeout(timeoutID)},2000)
},[authState.toast.display])
 
  return (
    <div className="App">
         <Toast type={authState.toast.type} message={authState.toast.message} display={authState.toast.display} />
      {modalDisplay&&
      < PlayListModal/>
      }
      <NavBar/>
      <Aside/>
      <Routes>
        <Route path="/" element={<ExplorePage/>}/>
        <Route path="/singleVideo-page/:source" element={<SingleVideoPage/>}/>
        <Route path="/watchLater-page" element ={<PrivateRoute><WatchLater/></PrivateRoute>}/>
        <Route path="/history-page" element ={ <PrivateRoute>< History/></PrivateRoute>}/>
        <Route path="/mock" element={<Mockman/>}/>
       
          <Route path="/playlist-page/:id" element={ <PrivateRoute><PlayListPage/></PrivateRoute>}/>
        
        <Route path="*" element={<Page404/>}/>
        <Route path="/signUp-Page" element={<SignUpPage/>}/>
        <Route path="/logIn-Page" element={<LogInPage/>}/>
      
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
