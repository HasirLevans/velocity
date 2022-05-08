import { createContext, useEffect, useReducer } from "react";
import ConnReducer from "./ConnReducer"

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
  };

  export const ConnContext = createContext(INITIAL_STATE);

  export const ConnContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ConnReducer, INITIAL_STATE);

    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])

    return (
        <ConnContext.Provider
            value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            }}  
        >
          {children}
        </ConnContext.Provider>
    )
  }

