import axios from "axios";
import * as actionTypes from "./types";
export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:8080/signup", userData);
      dispatch({
        type: actionTypes.SIGNUP,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
