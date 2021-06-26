import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allProfiles } from "../modules/profileAPI";


const ProfileView = () => {

  const { profileId } = useParams();
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state);
  const [profile, setProfile] = useState();

  useEffect(() => {
    dispatch(allProfiles())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setProfile(profiles.find(profile => profile.id === parseInt(profileId, 10)))
  }, [profileId, profiles]);

  return profile ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Details for Profile ID {profile.id}</h1>
        <hr/>
        <h3>Email</h3>
        <p className="lead">{profile.email}</p>
        <h3>User</h3>
        <p className="lead">{profile.userId}</p>
        <h3>Goals</h3>
        <p className="lead">{profile.goalId}</p>
        <h3>AddressId</h3>
        <p className="lead">{profile.addressId}</p>
        <h3>ProgramsId</h3>
        <p className="lead">{profile.programId}</p>
        <h3>Sets</h3>
        <p className="lead">{profile.setId}</p>
        <h3>Weight</h3>
        <p className="lead">{profile.weight}</p>
        <h3>Height</h3>
        <p className="lead">{profile.height}</p>
        <h3>MedicalCondition</h3>
        <p className="lead">{profile.medicalConditions}</p>
        <h3>Disabilities</h3>
        <p className="lead">{profile.disabilities}</p>
        <hr/>
        <p>
          <Link to="/profiles-list">&laquo; back to all Profiles view</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default ProfileView