import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router";
import { Link, useHistory, Redirect } from "react-router-dom";
import { userProfile } from "../modules/userAPI";
import { userProgram } from "../modules/userProgramAPI";
import { userWorkout } from "../modules/userWorkoutAPI";
import { userAddress } from "../modules/userAddressAPI";
import { userData } from "../modules/userDataAPI";

const Dashboard = () => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)
  const { user, uProgram, uWorkout, uAddress, uData } = useSelector((state) => state);

  useEffect(() => {
    dispatch(userProfile()).then(() => {
      setIsLoading(false);
      console.log('loading')
    }
    )
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (user !== null && user.email) {
      dispatch(userProgram(user.programId))
      dispatch(userWorkout(user.workoutId))
      dispatch(userAddress(user.addressId))
      dispatch(userData(user.userId))
    }
  }, [user]);

  return (
    <>
    { isLoading === true && <p>Loading user…</p> } 
      {(isLoading === false && user === null) && <Redirect to="/add-profile" />}
      {user !== null &&
        <div className="row">
          <div className="col-sm-12">
            <h2>YOUR GOAL PROGRAM</h2>
            <hr />
            <table className="table table-sm table-dark">
              <tbody>
                <tr className="bg-primary">
                  <td>Name</td>
                  <td>{uProgram.name}</td>
                </tr>
                <tr className="bg-danger">
                  <td>Category</td>
                  <td>{uProgram.category}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-sm-12">
            <h2>YOUR GOAL WORKOUT</h2>
            <hr />
            <table className="table table-sm table-dark">
              <tbody>
                <tr className="bg-primary">
                  <td>Name</td>
                  <td>{uWorkout.name}</td>
                </tr>
                <tr className="bg-danger">
                  <td>Type</td>
                  <td>{uWorkout.type}</td>
                </tr>
                <tr className="bg-success">
                  <td>Complete</td>
                  <td>{uWorkout.complete ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-sm-12">
            <h2>YOUR PROFILE DETAILS</h2>
            <hr />
            <table className="table table-sm table-dark">
              <tbody>
                <tr className="bg-primary">
                  <td>Email</td>
                  <td>{user.email}</td>
                </tr>
                <tr className="bg-danger">
                  <td>First Name</td>
                  <td>{uData.firstName}</td>
                </tr>
                <tr className="bg-info">
                  <td>Last Name</td>
                  <td>{uData.lastName}</td>
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
                <tr className="bg-success">
                  <td>Role</td>
                  <td>{uData.role}</td>
                </tr>
                <tr className="bg-warning">
                  <td>Address 1</td>
                  <td>{uAddress.addressLine1}</td>
                </tr>
                <tr className="bg-danger">
                  <td>Address 2</td>
                  <td>{uAddress.addressLine2}</td>
                </tr>
                <tr className="bg-info">
                  <td>Address 3</td>
                  <td>{uAddress.addressLine3}</td>
                </tr>
                <tr className="bg-info">
                  <td>Postal Code</td>
                  <td>{uAddress.postalCode}</td>
                </tr>
                <tr className="bg-info">
                  <td>City</td>
                  <td>{uAddress.city}</td>
                </tr>
                <tr className="bg-info">
                  <td>Country</td>
                  <td>{uAddress.country}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <p>
              <Link to="/programs">Go to programs to add goal</Link>
            </p>
            <hr />
            <p>
              <Link to="/workouts">Go to workouts to add goal</Link>
            </p>
          </div>
        </div>
      }
    </>

  )
}

export default Dashboard