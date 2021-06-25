import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const USER_PROFILE = 'USER_PROFILE';
const LIST_PROFILES = 'LIST_PROFILES';
const ADD_PROFILE = 'ADD_PROFILE';
const DELETE_PROFILE = 'DELETE_PROFILE';

const profilesReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_PROFILES + SUCCESS_SUFFIX:
      return action.payload.data;
      
    case USER_PROFILE + SUCCESS_SUFFIX:
        return action.payload.data[0];

    case DELETE_PROFILE:
      return state.filter((profile) => profile.id !== action.payload.profile.id);

    default:
      return state;
  }
};

export default profilesReducer;

export const userProfile = () => ({
    type: USER_PROFILE,
    payload: {
      request: {
        url: `https://localhost:44339/api/v1/profiles/profiles/${UserService.getUsername()}`,
      },
    },
  });

export const allProfiles = () => ({
  type: LIST_PROFILES,
  payload: {
    request: {
      url: 'https://localhost:44339/api/v1/profiles',
    },
  },
});

export const addProfile = profile => {
  console.log(`${UserService.getUsername()} added the profile ${profile.email} ${profile.userId} ${profile.weight} ${profile.height} ${profile.medicalConditions} ${profile.disabilities}`);
  return {
    type: ADD_PROFILE,
    payload: {
      request: {
        url: 'https://localhost:44339/api/v1/profiles',
        method: HttpService.HttpMethods.POST,
        data: profile,
      },
    },
  }
};

export const deleteProfile = profile => {
  console.log(`${UserService.getUsername()} deletes the profile ${profile.name}`);
  return {
    type: DELETE_PROFILE,
    payload: {
      profile,
      request: {
        url: `https://localhost:44339/api/v1/profiles/${profile.id}`,
        method: HttpService.HttpMethods.DELETE,
      },
    },
  }
};