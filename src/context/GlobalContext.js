import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

export default ({ children }) => {
  const [parentalControlData, setParentalControlData] = useState(null);
  const [parentalControlModalVisible, setParentalControlModalVisible] =
    useState(false);

  const toggleParentalControlModal = (data) => {
    setParentalControlData(data);
    setParentalControlModalVisible(!parentalControlModalVisible);
  };

  return (
    <GlobalContext.Provider
      value={{
        // getters
        parentalControlData,
        parentalControlModalVisible,
        // setters
        toggleParentalControlModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
