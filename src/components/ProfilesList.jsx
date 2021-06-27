import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allProfiles, deleteProfile } from "../modules/profileAPI";
import RenderOnRole from "./RenderOnRole";

const ProfilesList = () => {
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allProfiles());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Profiles Available in MeFit</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>UserId</th>
              <th>GoalId</th>
              <th>AddressId</th>
              <th>ProgramId</th>
              <th>WorkoutId</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Medical-Conditions</th>
              <th>Disabilities</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>
                  <Link to={`/profiles/${profile.id}`}>{profile.email}</Link>
                </td>
                <td>{profile.userId}</td>
                <td>{profile.goalId}</td>
                <td>{profile.addressId}</td>
                <td>{profile.programId}</td>
                <td>{profile.workoutId}</td>
                <td>{profile.weight}</td>
                <td>{profile.height}</td>
                <td>{profile.medicalConditions}</td>
                <td>{profile.disabilities}</td>
                <td><RenderOnRole roles={['admin']}>
                  <button
                    className="btn btn-xs btn-danger"
                    onClick={() => dispatch(deleteProfile(profile))}
                  >
                    Delete Profile
                  </button></RenderOnRole>
                </td>
              </tr>
            ))}
            </tbody>
            </table>
      </div>
    </div>
  );
};

export default ProfilesList
