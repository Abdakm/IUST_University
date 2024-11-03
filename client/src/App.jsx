import { useEffect, useState } from "react";
// context
import { UserProvider } from "./contexts/userContext";
import useLocalStorage from "./hooks/useLocalStorage";
import Login from "./components/Login";
import Home from "./components/Home";
import { useLocation } from "react-router-dom";

function App() {
  const loc = useLocation();

  return (
    <div className="select-none">
      <Home />
    </div>
  );
}

export default App;
