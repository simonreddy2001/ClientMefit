import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allPrograms, deleteProgram, addProgramToProfile } from "../modules/programAPI";

const Programs = () => {

  const dispatch = useDispatch();
  const { programs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allPrograms())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Programs to Add to your Goal</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {programs.map((program) => (
            <tr key={program.id}>
              <td>{program.id}</td>
              <td>
                <Link to={`/programs/${program.id}`}>{program.name}</Link>
              </td>
              <td>{program.category}</td>
              <td>
                <button className="btn btn-xs btn-success" onClick={() => dispatch(addProgramToProfile(program))}>
                  Add Program to my Profile
                </button>
              </td>
              <td>
                <button className="btn btn-xs btn-danger" onClick={() => dispatch(deleteProgram(program))}>
                  Delete Program
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Programs
