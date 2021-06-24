import { combineReducers } from "redux";
import programs from "./programAPI";
import workouts from "./workoutAPI";

export default combineReducers({
  programs, workouts
});
