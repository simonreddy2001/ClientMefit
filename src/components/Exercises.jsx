import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allExercises, deleteExercise } from "../modules/exerciseAPI";
import RenderOnRole from "./RenderOnRole";

const Exercises = () => {

  const dispatch = useDispatch();
  const { exercises } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allExercises())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Exercises Available</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Target Muscle Group</th>

              <th><RenderOnRole roles={['admin', 'contributor']}>Admin Actions</RenderOnRole></th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise) => (
              <tr key={exercise.id}>
                <td>{exercise.id}</td>
                <td>
                  <Link to={`/exercises/${exercise.id}`}>{exercise.name}</Link>
                </td>
                <td>{exercise.description}</td>
                <td>{exercise.targetMuscleGroup}</td>

                <td><RenderOnRole roles={['admin', 'contributor']}>
                  <button className="btn btn-xs btn-danger" onClick={() => dispatch(deleteExercise(exercise))}>
                    Delete Exercise
                  </button>
                  <button className="btn btn-xs btn-warning">
                    Edit Exercise
                  </button>
                </RenderOnRole>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <RenderOnRole roles={['admin', 'contributor']}>
          <button className="btn bg-success">
            <Link to="/exercises/new">Add a new Exercise</Link>
          </button>
        </RenderOnRole>
      </div>
    </div>
  );
}

export default Exercises
