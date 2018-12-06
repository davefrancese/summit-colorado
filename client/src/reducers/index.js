import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "./authReducer";
import trailsReducer from "./trailsReducer";

export default combineReducers({
  authReducer,
  trailsReducer,
  form: reduxFormReducer
});
