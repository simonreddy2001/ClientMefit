import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";


const USER_WORKOUT = 'USER_WORKOUT';


const userReducer = (state = [], action) => {
  switch (action.type) {

    case USER_WORKOUT + SUCCESS_SUFFIX:
      return action.payload.data;

    default:
      return state;
  }
};

export default userReducer;

export const userWorkout = (workoutId) => ({
  type: USER_WORKOUT,
  payload: {
    request: {
      url: `https://mefitdeploy.azurewebsites.net/api/v1/workouts/${workoutId}`,
      method: HttpService.HttpMethods.GET,
    },
  },
});
