import UserService from "../services/UserService";

const Welcome = () => (
  <div className="jumbotron">
    <h1>Hello There!</h1>
    <p className="lead">Please authenticate/register yourself to MeFit App to get Fit</p>
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
    </p>
  </div>
)

export default Welcome
