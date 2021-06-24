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
        <h1>Information for program ID {program.id}</h1>
        <hr/>
        <h3>Name</h3>
        <p className="lead">{program.name}</p>
        <h3>Category</h3>
        <p className="lead">{program.category}</p>
        <hr/>
        <p>
          <Link to="/">&laquo; back to programs</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default Program
