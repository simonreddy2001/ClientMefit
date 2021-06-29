import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addExercise } from "../modules/exerciseAPI";
import RenderOnRole from "./RenderOnRole";
import { Link } from "react-router-dom";

const ExerciseCreate = () => {

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [targetMuscleGroup, setTargetMuscleGroup] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description || !name || !targetMuscleGroup) {
      return;
    }
    dispatch(addExercise({ description, name, targetMuscleGroup }))
      .then(() => history.push("/exercises"))
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add a new exercise:</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Name"
              value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" placeholder="Description"
              value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="targetMuscleGroup">Target Muscle Group</label>
            <input type="text" className="form-control" placeholder="Target Muscle Group"
              value={targetMuscleGroup} onChange={(e) => setTargetMuscleGroup(e.target.value)} />
          </div>

          <RenderOnRole roles={['admin', 'contributor']}>
            <button type="submit" className="btn btn-primary">Add exercise</button>
            <button className="btn btn-dark"><Link to="/exercises">Cancel</Link></button>
          </RenderOnRole>
        </form>
      </div>
    </div>
  );
}

export default ExerciseCreate