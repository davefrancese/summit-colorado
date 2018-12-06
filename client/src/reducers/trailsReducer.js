// import FETCH_TRAILS from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_TRAILS":
      // console.log("reducer", action.payload);
      return action.payload || false;
    default:
      return state;
  }
}
