import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignIn from "./screens/UserSignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
