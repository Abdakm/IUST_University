import { useState, createContext, useContext } from "react";

export const ColorContext = createContext(null);

export const ColorProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState("#005478");
  const [secondaryColor, setSecondaryColor] = useState("#E6C400");
  const [thirdColor, setThirdColor] = useState("#0088C2");

  return (
    <ColorContext.Provider
      value={{
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        thirdColor,
        setThirdColor,
      }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useStore = () => {
  const colors = useContext(ColorContext);
  if (!colors) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return colors;
};
