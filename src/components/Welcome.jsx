import UserService from "../services/UserService";
import logo from '../Assets/logo.jpg'

const Welcome = () => (
  <div className="jumbotron text-center">
    <img src={logo} alt="Logo"></img>
    <hr />
    <h1>Welcome to MeFit</h1>
    <p className="lead">Hello there! Please authenticate/register yourself to MeFit to get Fit</p>
    <hr />
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
    </p>
  </div>
)

export default Welcome
