import { combineReducers } from "redux";
import programs from "./programAPI";
import workouts from "./workoutAPI";
import exercises from "./exerciseAPI";
import profiles from "./profileAPI"

export default combineReducers({
  programs, workouts, exercises, profiles
});
