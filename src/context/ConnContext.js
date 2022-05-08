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

    return (
        <ConnContext.Provider
            value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
            }}
        ></ConnContext.Provider>
    )
  }