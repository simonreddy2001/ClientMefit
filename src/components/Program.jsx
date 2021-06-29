import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allPrograms } from '../modules/programAPI';

const Program = () => {

  const { programId } = useParams();
  const dispatch = useDispatch();
  const { programs } = useSelector((state) => state);
  const [program, setProgram] = useState();

  useEffect(() => {
    dispatch(allPrograms())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setProgram(programs.find(program => program.id === parseInt(programId, 10)))
  }, [programId, programs]);

  return program ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Information of program</h1>
        <hr />
        <table className="table table-sm table-dark">
          <tbody>
            <tr className="bg-primary">
              <td>Name</td>
              <td>{program.name}</td>
            </tr>
            <tr className="bg-danger">
              <td>Category</td>
              <td>{program.category}</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <p>
          <Link to="/programs">&laquo; back to programs</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default Program
