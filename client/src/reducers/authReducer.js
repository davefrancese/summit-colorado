// import FETCH_USER from "../actions/index";

export default function(state = {}, action) {
  // console.log("authReducer", action);
  switch (action.type) {
    case "FETCH_USER":
      return action.payload || false;
    default:
      return state;
  }
}
