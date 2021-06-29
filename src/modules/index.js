import { combineReducers } from "redux";
import programs from "./programAPI";
import workouts from "./workoutAPI";
import exercises from "./exerciseAPI";
import profiles from "./profileAPI";
import user from "./userAPI";
import uProgram from "./userProgramAPI"
import uWorkout from "./userWorkoutAPI";
import uData from "./userDataAPI"
import uAddress from "./userAddressAPI"

export default combineReducers({
  programs, workouts, exercises, profiles, user, uProgram, uWorkout, uData, uAddress
});
