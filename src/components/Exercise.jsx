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
        <h1>Information of Exercise</h1>
        <hr />
        <table className="table table-sm table-dark">
          <tbody>
            <tr className="bg-primary">
              <td>Name</td>
              <td>{exercise.name}</td>
            </tr>
            <tr className="bg-danger">
              <td>Description</td>
              <td>{exercise.description}</td>
            </tr>
            <tr className="bg-success">
              <td>Target Muscle Group</td>
              <td>{exercise.targetMuscleGroup}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p>
          <Link to="/exercises">&laquo; back to exercises</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default Exercise