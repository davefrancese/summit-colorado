import axios from "axios";
import { FETCH_USER, FETCH_TRAILS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  // dispatch function is from redux-thunk
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitTrail = (values, history) => async dispatch => {
  const res = await axios.post("/api/trails", values);
  // redirect user after axios post
  history.push("/trails");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTrails = () => async dispatch => {
  const res = await axios.get("/api/trails");
  dispatch({ type: FETCH_TRAILS, payload: res.data });
  // console.log("action", res.data);
};

export default {
  fetchUser,
  submitTrail,
  fetchTrails
};
