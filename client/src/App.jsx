import { useEffect } from "react";
// context
import { ColorProvider } from "./contexts/colorContext";

import useLocalStorage from "./hooks/useLocalStorage";
import Login from "./components/Login";
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
    <div>
      <ColorProvider>
        <Login />
      </ColorProvider>
    </div>
  );
}

export default App;
