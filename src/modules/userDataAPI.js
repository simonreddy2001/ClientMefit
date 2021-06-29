import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";


const USER_DATA = 'USER_DATA';


const userReducer = (state = [], action) => {
  switch (action.type) {

    case USER_DATA + SUCCESS_SUFFIX:
      return action.payload.data;

    default:
      return state;
  }
};

export default userReducer;

export const userData = (userId) => ({
  type: USER_DATA,
  payload: {
    request: {
      url: `https://mefitdeploy.azurewebsites.net/api/v1/users/${userId}`,
      method: HttpService.HttpMethods.GET,
    },
  },
});