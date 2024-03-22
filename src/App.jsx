import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import User from "./components/User/User";

function App() {
  const [name, setName] = useState("Soumya");
  const setUsername = (name) => {
    setName(name);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUsername={setUsername} />} />
        <Route path="/user/:id" element={<User name={name} />} />
      </Routes>
    </Router>
  );
}

export default App;
