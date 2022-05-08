import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "CONN_START" });
    try {
      const res = await axios.post("/auth/login", userCredential);
      dispatch({ type: "CONN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "CONN_FAILURE", payload: err });
    }
  };