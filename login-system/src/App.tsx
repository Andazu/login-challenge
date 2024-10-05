import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignUp from "./screens/UserSignUp";
import SignIn from "./screens/SignIn";
import UserProfile from "./screens/UserProfile";
import UserEditProfile from "./screens/UserEditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/usereditprofile' element={<UserEditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
