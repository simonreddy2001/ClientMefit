import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const LIST_PROGRAMS = 'LIST_PROGRAMS';
const ADD_PROGRAM = 'ADD_PROGRAM';
const DELETE_PROGRAM = 'DELETE_PROGRAM';
const ADD_PROGRAM_TO_PROFILE = 'ADD_PROGRAM_TO_PROFILE'

const programsReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_PROGRAMS + SUCCESS_SUFFIX:
      return action.payload.data;

    case DELETE_PROGRAM:
      return state.filter((program) => program.id !== action.payload.program.id);

    default:
      return state;
  }
};

export default programsReducer;

export const allPrograms = () => ({
  type: LIST_PROGRAMS,
  payload: {
    request: {
      url: 'https://localhost:44339/api/v1/programs',
    },
  },
});

export const addProgram = program => {
  console.log(`${UserService.getUsername()} added the program ${program.name}`);
  return {
    type: ADD_PROGRAM,
    payload: {
      request: {
        url: 'https://localhost:44339/api/v1/programs',
        method: HttpService.HttpMethods.POST,
        data: program,
      },
    },
  }
};

export const deleteProgram = program => {
  console.log(`${UserService.getUsername()} deletes the program ${program.name}`);
  return {
    type: DELETE_PROGRAM,
    payload: {
      program,
      request: {
        url: `https://localhost:44339/api/v1/programs/${program.id}`,
        method: HttpService.HttpMethods.DELETE,
      },
    },
  }
};

export const addProgramToProfile = program => {
  console.log(`${UserService.getUsername()} added program to your profile ${program.name}`);
  return {
    type: ADD_PROGRAM_TO_PROFILE,
    payload: {
      program,
      request: {
        //url: `https://localhost:44339/api/v1/profiles/${profileId}`,
        method: HttpService.HttpMethods.PATCH,
      },
      body: JSON.stringify({
        path: '/programId',
        op: 'replace',
        value: `${program.id}`
      })
    },
  }
};
