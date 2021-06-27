import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const USER_PROFILE = 'USER_PROFILE';

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




 