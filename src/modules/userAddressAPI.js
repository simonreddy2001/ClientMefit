import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";


const USER_ADDRESS = 'USER_ADDRESS';


const userReducer = (state = [], action) => {
  switch (action.type) {

    case USER_ADDRESS + SUCCESS_SUFFIX:
      return action.payload.data;
      
    default:
      return state;
  }
};

export default userReducer;

export const userAddress = (addressId) => ({
  type: USER_ADDRESS,
  payload: {
    request: {
      url: `https://localhost:44339/api/v1/addresses/${addressId}`,
      method: HttpService.HttpMethods.GET,
    },
  },
});