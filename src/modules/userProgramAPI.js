import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";


const USER_PROGRAM = 'USER_PROGRAM';


const userReducer = (state = [], action) => {
  switch (action.type) {

    case USER_PROGRAM + SUCCESS_SUFFIX:
      return action.payload.data;

    default:
      return state;
  }
};

export default userReducer;

export const userProgram = (programId) => ({
  type: USER_PROGRAM,
  payload: {
    request: {
      url: `https://mefitdeploy.azurewebsites.net/api/v1/programs/${programId}`,
      method: HttpService.HttpMethods.GET,
    },
  },
});
