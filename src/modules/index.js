import { combineReducers } from "redux";
import programs from "./programAPI";
import workouts from "./workoutAPI";
import exercises from "./exerciseAPI";

export default combineReducers({
  programs, workouts, exercises
});
