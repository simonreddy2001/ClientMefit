import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { userProfile } from "../modules/profileAPI";


const Dashboard = () => {

  //const { profileId } = useParams();
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state);
 

  useEffect(() => {
    dispatch(userProfile())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Details of your Profile
        </h1>
        <hr/>
        <h3>Email</h3>
        <p className="lead">{profiles.email}</p>
        <h3>User</h3>
        <p className="lead">{profiles.userId}</p>
        <h3>Goals</h3>
        <p className="lead">{profiles.goalId}</p>
        <h3>AddressId</h3>
        <p className="lead">{profiles.addressId}</p>
        <h3>ProgramsId</h3>
        <p className="lead">{profiles.programId}</p>
        <h3>Sets</h3>
        <p className="lead">{profiles.setId}</p>
        <h3>Weight</h3>
        <p className="lead">{profiles.weight}</p>
        <h3>Height</h3>
        <p className="lead">{profiles.height}</p>
        <h3>MedicalCondition</h3>
        <p className="lead">{profiles.medicalConditions}</p>
        <h3>Disabilities</h3>
        <p className="lead">{profiles.disabilities}</p>
        <hr/>
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
    </div>
  )
}

export default Dashboard