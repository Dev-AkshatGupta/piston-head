import "./App.css";
import { Routes, Route ,Navigate} from "react-router-dom";
import Mockman from "mockman-js";
import {  ExplorePage } from "./pages/ExplorePage/ExplorePage";
import {NavBar} from "./components/NavBar/NavBar";
import {Footer} from "./components/Footer/Footer";
import {Aside} from "./components/Aside/Aside";
import {SingleVideoPage} from "./pages/SingleVideoPlayer/SingleVideoPage";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { History } from "./pages/History/History"; 
import { PlayListModal } from "./components/PlayListModal/PlayListModal";
import { useDataValues } from "./contextAndReducers/DataProvider";
import {PlayListPage} from "./pages/PlayList/PlayListPage";
import {Page404} from "./pages/Page-404/Page404";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { LogInPage } from "./pages/Log-In-Page/LogInPage";
import { ToastContainer } from 'react-toastify';
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import { useAuthorization } from "./contextAndReducers/AuthProvider";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
function App() {
const {modalDisplay, setModalDisplay}=useDataValues();
const {authState,authDispatch }=useAuthorization();

 
  return (
    <div className="App">
      <ToastContainer />
      {modalDisplay && <PlayListModal />}
      <NavBar />
      <Aside />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/singleVideo-page/:source" element={<SingleVideoPage />} />
        <Route
          path="/watchLater-page"
          element={
            <PrivateRoute>
              <WatchLater />
            </PrivateRoute>
          }
        />
        <Route
          path="/history-page"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route path="/mock" element={<Mockman />} />

        <Route
          path="/playlist-page/:id"
          element={
            <PrivateRoute>
              <PlayListPage />
            </PrivateRoute>
          }
        />

  
          <Route
            path="/profile-page"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
 
        <Route path="/signUp-Page" element={<SignUpPage />} />
        <Route path="/logIn-Page" element={<LogInPage />} />
        <Route path="*" element={<Page404 />} />
        <Route
          path="*"
          element={
            <Navigate to={authState.token ? "/profile-page" : "/404-page"} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
