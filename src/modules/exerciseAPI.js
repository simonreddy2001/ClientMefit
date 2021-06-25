import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const LIST_EXERCISES = 'LIST_EXERCISES';
const ADD_EXERCISE = 'ADD_EXERCISE';
const DELETE_EXERCISE = 'DELETE_EXERCISE';

const exercisesReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_EXERCISES + SUCCESS_SUFFIX:
      return action.payload.data;

    case DELETE_EXERCISE:
      return state.filter((exercise) => exercise.id !== action.payload.exercise.id);

    default:
      return state;
  }
};

export default exercisesReducer;

export const allExercises = () => ({
  type: LIST_EXERCISES,
  payload: {
    request: {
      url: 'https://localhost:44339/api/v1/exercises',
    },
  },
});

export const addExercise = exercise => {
  console.log(`${UserService.getUsername()} added the exercise ${exercise.name}`);
  return {
    type: ADD_EXERCISE,
    payload: {
      request: {
        url: 'https://localhost:44339/api/v1/exercises',
        method: HttpService.HttpMethods.POST,
        data: exercise,
      },
    },
  }
};

export const deleteExercise = exercise => {
  console.log(`${UserService.getUsername()} deletes the exercise ${exercise.name}`);
  return {
    type: DELETE_EXERCISE,
    payload: {
      exercise,
      request: {
        url: `https://localhost:44339/api/v1/exercises/${exercise.id}`,
        method: HttpService.HttpMethods.DELETE,
      },
    },
  }
};