import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { userProfile } from "../modules/userAPI";


const Dashboard = () => {

  //const { profileId } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const history = useHistory()

  useEffect(() => {
    
    setTimeout(()=>{if(!user.email){
      history.push('/add-profile')
    }},3000)
    dispatch(userProfile())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <div className="row">
      <div className="col-sm-12">

        <h1>Details of your Profile {user.id}</h1>
        <hr/>
        <table className="table table-sm table-dark">
          <tbody>
            <tr className="bg-primary">
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr className="bg-danger">
              <td>User</td>
              <td>{user.userId}</td>
            </tr>
            <tr className="bg-info">
              <td>Goals</td>
              <td>{user.goalId}</td>
            </tr>
            <tr className="bg-success">
              <td>AddressId</td>
              <td>{user.addressId}</td>
            </tr>
            <tr className="bg-warning">
              <td>ProgramsId</td>
              <td>{user.programId}</td>
            </tr>
            <tr className="bg-danger">
              <td>WorkoutId</td>
              <td>{user.workoutId}</td>
            </tr>
            <tr className="bg-info">
              <td>Sets</td>
              <td>{user.setId}</td>
            </tr>
            <tr className="bg-success">
              <td>Weight</td>
              <td>{user.weight}</td>
            </tr>
            <tr className="bg-warning">
              <td>Height</td>
              <td>{user.height}</td>
            </tr>
            <tr className="bg-danger">
              <td>MedicalCondition</td>
              <td>{user.medicalConditions}</td>
            </tr>
            <tr className="bg-info">
              <td>Disabilities</td>
              <td>{user.disabilities}</td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <p>
          <Link to="/programs">Go to programs to add goal</Link>
        </p>
      </div>
    </div>
  )
}

export default Dashboard