import { NavLink, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "normalize.css";
import HomePage from "./pages/HomePage";
import Shorts from "./pages/ShortsPage";
import Profile from "./pages/ProfilePage";
function App() {
  return (
    <div className="App">
      <div style={{ height: "70px" }}></div>
      <header className="bg-gray-900 w-full p-2 h-16 left-0 top-0 fixed flex justify-between z-50">
        <div>
          <Link to="/socialapp">
            <img
              className="cursor-pointer w-12-"
              src={require("./assets/header/tailwind.png")}
              alt=""
            />
          </Link>
        </div>
        <nav>
          <ul className="flex gap-3 h-full">
            <li className="navLink">
              <NavLink to="/socialapp">
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/shorts">
                <i className="fa-solid fa-video"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <NavLink to="/profile">
            <img
              className="rounded-full"
              src={require("./assets/header/profile.png")}
              alt=""
            />
          </NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/socialapp" element={<HomePage />}></Route>
        <Route path="/shorts" element={<Shorts />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
