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
        <h1>Information for Workout ID {workout.id}</h1>
        <hr/>
        <h3>Name</h3>
        <p className="lead">{workout.name}</p>
        <h3>Type</h3>
        <p className="lead">{workout.type}</p>
        <h3>Complete</h3>
        <p className="lead">{workout.complete}</p>
        <hr/>
        <p>
          <Link to="/workouts">&laquo; back to workouts</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default Workout