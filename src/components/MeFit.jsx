import { Route, Switch } from "react-router-dom";
import AddProfile from "./AddProfile";
import Program from "./Program";
import ProgramCreate from "./ProgramCreate";
import Programs from "./Programs";
import Workout from "./Workout";
import Workouts from "./Workouts";
import WorkoutCreate from "./WorkoutCreate";
import Exercise from "./Exercise";
import Exercises from "./Exercises";
import ExerciseCreate from "./ExerciseCreate";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import RolesRoute from "./RolesRoute";
import SecretBooks from "./SecretBooks";
import Dashboard from "./Dashboard";

const MeFit = () => (
  <>
    <Menu />
    <Switch>
    <Route exact path="/">
        <Dashboard />
      </Route>
    <Route exact path="/add-profile">
        <AddProfile />
      </Route>
      <Route exact path="/programs">
        <Programs />
      </Route>
      <Route exact path="/programs/new">
        <ProgramCreate />
      </Route>
      <Route path="/programs/:programId">
        <Program />
      </Route>
      <Route exact path="/workouts">
        <Workouts />
      </Route>
      <Route exact path="/workouts/new">
        <WorkoutCreate />
      </Route>
      <Route path="/workouts/:workoutId">
        <Workout />
      </Route>
      <Route exact path="/exercises">
        <Exercises />
      </Route>
      <Route exact path="/exercises/new">
        <ExerciseCreate />
      </Route>
      <Route path="/exercises/:exerciseId">
        <Exercise />
      </Route>
      <RolesRoute path="/secret" roles={['admin']}>
        <SecretBooks />
      </RolesRoute>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </>
)

export default MeFit
