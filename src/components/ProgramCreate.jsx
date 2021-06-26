import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addProgram } from "../modules/programAPI";
import RenderOnRole from "./RenderOnRole";

const ProgramCreate = () => {

  const [category, setCategory] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!category || !name) {
      return;
    }
    dispatch(addProgram({ category, name }))
      .then(() => history.push("/"))
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add a new program:</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Name"
                   value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" className="form-control" placeholder="Category"
                   value={category} onChange={(e) => setCategory(e.target.value)}/>
          </div>
          
          <RenderOnRole roles={['admin','contributor']}>
            <button type="submit" className="btn btn-primary">Add program</button>
          </RenderOnRole>
        </form>
      </div>
    </div>
  );
}

export default ProgramCreate
