import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const USER_PROFILE = 'USER_PROFILE';
const USER_PROGRAM = 'USER_PROGRAM';
const USER_WORKOUT = 'USER_WORKOUT';

const userReducer = (state = [], action) => {
  switch (action.type) {
    
    case USER_PROFILE + SUCCESS_SUFFIX:
        return action.payload.data[0];

    default:
      return state;
  }
};

export default userReducer;

export const userProfile = () => ({
    type: USER_PROFILE,
    payload: {
      request: {
        url: `https://localhost:44339/api/v1/profiles/profiles/${UserService.getUsername()}`,
        method: HttpService.HttpMethods.GET,
      },
    },
  });

  export const userProgram = (programId) => ({
    type: USER_PROGRAM,
    payload: {
      request: {
        url: `https://localhost:44339/api/v1/programs/${programId}`,
      },
    },
  });

  export const userWorkout = (workoutId) => ({
    type: USER_WORKOUT,
    payload: {
      request: {
        url: `https://localhost:44339/api/v1/programs/${workoutId}`,
      },
    },
  });


 