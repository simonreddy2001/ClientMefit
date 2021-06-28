import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const LIST_WORKOUTS = 'LIST_WORKOUTS';
const ADD_WORKOUT = 'ADD_WORKOUT';
const DELETE_WORKOUT = 'DELETE_WORKOUT';
const ADD_WORKOUT_TO_PROFILE = 'ADD_WORKOUT_TO_PROFILE'

const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_WORKOUTS + SUCCESS_SUFFIX:
      return action.payload.data;

    case DELETE_WORKOUT:
      return state.filter((workout) => workout.id !== action.payload.workout.id);

    default:
      return state;
  }
};

export default workoutsReducer;

export const allWorkouts = () => ({
  type: LIST_WORKOUTS,
  payload: {
    request: {
      url: 'https://mefitdeploy.azurewebsites.net/api/v1/workouts',
    },
  },
});

export const addWorkout = workout => {
  console.log(`${UserService.getUsername()} added the workout ${workout.name}`);
  return {
    type: ADD_WORKOUT,
    payload: {
      request: {
        url: 'https://mefitdeploy.azurewebsites.net/api/v1/workouts',
        method: HttpService.HttpMethods.POST,
        data: workout,
      },
    },
  }
};

export const deleteWorkout = workout => {
  console.log(`${UserService.getUsername()} deletes the workout ${workout.name}`);
  return {
    type: DELETE_WORKOUT,
    payload: {
      workout,
      request: {
        url: `https://mefitdeploy.azurewebsites.net/api/v1/workouts/${workout.id}`,
        method: HttpService.HttpMethods.DELETE,
      },
    },
  }
};

export const addWorkoutToProfile = workout => {
  console.log(`${UserService.getUsername()} added Workout to profile ${workout.name}`);
  return {
    type: ADD_WORKOUT_TO_PROFILE,
    payload: {
      workout,
      request: {
        url: `https://mefitdeploy.azurewebsites.net/api/v1/profiles/profiles/${UserService.getUsername()}`,
        method: HttpService.HttpMethods.PATCH,
        headers: {    "Content-type": "application/json"  },
        data: [{
          "path": "/workoutId",
          "op": "replace",
          "value": workout.id
        }]
      },
    },
  }
};