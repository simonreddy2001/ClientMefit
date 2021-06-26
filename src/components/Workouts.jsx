import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allWorkouts, deleteWorkout, addWorkoutToProfile } from "../modules/workoutAPI";
import RenderOnRole from "./RenderOnRole";

const Workouts = () => {

  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allWorkouts())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Workout to Add to your Goal</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Complete</th>
              <th>User Actions</th>
              <th>Admin Actions</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr key={workout.id}>
                <td>{workout.id}</td>
                <td>
                  <Link to={`/workouts/${workout.id}`}>{workout.name}</Link>
                </td>
                <td>{workout.type}</td>
                <td>{workout.complete ? 'Yes' : 'No'}</td>
                <td>
                  <button className="btn btn-xs btn-success" onClick={() => dispatch(addWorkoutToProfile(workout))}>
                    Add Workout to my Profile
                  </button>
                </td>
                <td><RenderOnRole roles={['admin','contributor']}>
                  <button
                    className="btn btn-xs btn-danger"
                    onClick={() => dispatch(deleteWorkout(workout))} >
                    Delete Workout
                  </button></RenderOnRole>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts