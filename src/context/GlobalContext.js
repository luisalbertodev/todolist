import { useState, createContext, useContext } from "react";
import { setLocalStorage, getLocalStorage } from "helpers";
import { USER_AUTH } from "constant";

const GlobalContext = createContext();

export default ({ children }) => {
  const [user, _setUser] = useState(getLocalStorage({ type: USER_AUTH }));

  const setUser = (currentUser) => {
    _setUser(currentUser);
    setLocalStorage({ type: USER_AUTH, dataSource: currentUser });
  };

  return (
    <GlobalContext.Provider
      value={{
        // getters
        user,
        // setters
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
