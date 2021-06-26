import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { userProfile } from "../modules/profileAPI";


const Dashboard = () => {

  //const { profileId } = useParams();
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state);
  const history = useHistory()

  useEffect(() => {
    dispatch(userProfile())
    if(!profiles.email){
      history.push('/add-profile')
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <div className="row">
      <div className="col-sm-12">

        <h1>Details of your Profile {profiles.id}</h1>
        <table className="table table-sm table-dark">
          <tbody>
            <tr className="bg-primary">
              <td>Email</td>
              <td>{profiles.email}</td>
            </tr>
            <tr className="bg-danger">
              <td>User</td>
              <td>{profiles.userId}</td>
            </tr>
            <tr className="bg-active">
              <td>Goals</td>
              <td>{profiles.goalId}</td>
            </tr>
            <tr className="bg-success">
              <td>AddressId</td>
              <td>{profiles.addressId}</td>
            </tr>
            <tr className="bg-danger">
              <td>ProgramsId</td>
              <td>{profiles.programId}</td>
            </tr>
            <tr className="bg-warning">
              <td>Sets</td>
              <td>{profiles.setId}</td>
            </tr>
            <tr className="bg-info">
              <td>Weight</td>
              <td>{profiles.weight}</td>
            </tr>
            <tr className="bg-light">
              <td>Height</td>
              <td>{profiles.height}</td>
            </tr>
            <tr className="bg-success">
              <td>MedicalCondition</td>
              <td>{profiles.medicalConditions}</td>
            </tr>
            <tr className="bg-danger">
              <td>Disabilities</td>
              <td>{profiles.disabilities}</td>
            </tr>
          </tbody>
        </table>
        <p>
          <Link to="/">&laquo; back to programs</Link>
        </p>
      </div>
    </div>
  )
}

export default Dashboard