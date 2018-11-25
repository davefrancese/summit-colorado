import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  // dispatch function is from redux-thunk
  dispatch({ type: FETCH_USER, payload: res.data });
};

export default fetchUser;
