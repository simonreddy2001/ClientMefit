import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addWorkout } from "../modules/workoutAPI";
import RenderOnRole from "./RenderOnRole";

const WorkoutCreate = () => {

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [complete, setComplete] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !type|| !complete) {
      return;
    }
    dispatch(addWorkout({ name, type, complete }))
      .then(() => history.push("/workouts"))
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add a new Workout:</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Workout Name"
                   value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input type="text" className="form-control" placeholder="Workout Type"
                   value={type} onChange={(e) => setType(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="complete">Complete</label>
            <input type="text" className="form-control" placeholder="Workout Complete"
                   value={complete} onChange={(e) => setComplete(e.target.value)}/>
          </div>
          <div>
          <RenderOnRole roles={['user']}>
            <button type="submit" className="btn btn-primary">Add Workout</button>
          </RenderOnRole>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WorkoutCreate