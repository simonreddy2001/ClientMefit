import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allExercises } from '../modules/exerciseAPI';

const Exercise = () => {

  const { exerciseId } = useParams();
  const dispatch = useDispatch();
  const { exercises } = useSelector((state) => state);
  const [exercise, setExercise] = useState();

  useEffect(() => {
    dispatch(allExercises())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setExercise(exercises.find(exercise => exercise.id === parseInt(exerciseId, 10)))
  }, [exerciseId, exercises]);

  return exercise ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Information for Exercise ID {exercise.id}</h1>
        <hr/>
        <h3>Name</h3>
        <p className="lead">{exercise.name}</p>
        <h3>Type</h3>
        <p className="lead">{exercise.description}</p>
        <h3>Complete</h3>
        <p className="lead">{exercise.targetMuscleGroup}</p>
        <hr/>
        <p>
          <Link to="/exercises">&laquo; back to exercises</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default Exercise