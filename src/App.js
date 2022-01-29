import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Components/Home";
import CreateProfile from "./Components/CreateProfile";
import Navbar from "./Components/Navbar";
import AuthProvider from "./Authentication/Context/AuthProvider";
import Login from "./Components/Login";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create-profile"
            element={
              <RequireAuth>
                <CreateProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/friends-list"
            element={
              <RequireAuth>
                <FriendsList />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
