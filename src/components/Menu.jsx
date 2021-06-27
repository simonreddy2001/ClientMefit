import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import logo from '../Assets/logo.jpg'

const Menu = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo"></img></Link>
      </div>
      <div id="navbar">
        <ul className="nav navbar-nav">
        <li><Link to="/">Dashboard</Link></li>
         {/*<li><Link to="/add-profile">Add Profile</Link></li>*/}
          <li><Link to="/programs">Programs</Link></li>
          
          <li><Link to="/workouts">Workouts</Link></li>
         
          <li><Link to="/exercises">Exercises</Link></li>
          
          <li><Link to="/profiles-list">Profiles</Link></li>
          {/*<li><Link to="/secret">Secret Books</Link></li>
          <li><Link to="/programs/new">New Program</Link></li>
           <li><Link to="/workouts/new">New Workout</Link></li>
           <li><Link to="/exercises/new">New Exercise</Link></li>
          <li><Link to="/foo">No Match</Link></li>*/}
        </ul>
        <button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0 }} onClick={() => UserService.doLogout()}>
          Logout
        </button>
        <p className="navbar-text navbar-right" style={{ marginRight: 15 }}>
          Signed in as {UserService.getUsername()}
        </p>
      </div>
    </div>
  </nav>
)

export default Menu
