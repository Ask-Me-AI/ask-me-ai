import React, { useContext } from 'react'
import useLocalStorage from './useLocalStorage';

const Context = React.createContext();

export function useLog() {
  return useContext(Context);
}

export const TheProvider = ({children}) => {
  const [account, setAccount] = useLocalStorage("@account", {});
  return <Context.Provider value={{account, setAccount}}>{children}</Context.Provider>
}
