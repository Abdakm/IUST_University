import { useEffect } from "react";
// context
import { ColorProvider } from "./contexts/colorContext";

import useLocalStorage from "./hooks/useLocalStorage";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  /*
  const ob = {
    first: "akmik",
    last: "akmik1",
    test: "test",
    test1: "test1",
  };
  const [value, setValue] = useLocalStorage("test", ob);
  console.log(value);
  useEffect(() => {
    setValue({
      ...value,
      test2: "teste2",
      test3: "test3",
    });
  }, []);
  console.log(value);
  */

  return (
    <div className="select-none">
      <ColorProvider>
        <Home />
      </ColorProvider>
    </div>
  );
}

export default App;
