import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allWorkouts } from '../modules/workoutAPI';

const Workout = () => {

  const { workoutId } = useParams();
  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state);
  const [workout, setWorkout] = useState();

  useEffect(() => {
    dispatch(allWorkouts())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setWorkout(workouts.find(workout => workout.id === parseInt(workoutId, 10)))
  }, [workoutId, workouts]);

  return workout ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Information of Workout</h1>
        <hr />
        <table className="table table-sm table-dark">
          <tbody>
            <tr className="bg-primary">
              <td>Name</td>
              <td>{workout.name}</td>
            </tr>
            <tr className="bg-danger">
              <td>Type</td>
              <td>{workout.type}</td>
            </tr>
            <tr className="bg-success">
              <td>Complete</td>
              <td>{workout.complete ? 'Yes' : 'No'}</td>
            </tr>
            <tr className="bg-success">
              <td>Exercises</td>
              <td>Skips, Sit-UPs</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          <Link to="/workouts">&laquo; back to workouts</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default Workout