import { useEffect, useState } from "react";
import { Home, Login, Account } from "./components/index";
import { useStore } from "./contexts/userContext";


function App() {
  const { user, setUser } = useStore();
  return (
    <div className="select-none">
      { user === null 
      ? <Home />
      : <Account />
      }
    </div>
  );
}

export default App;
