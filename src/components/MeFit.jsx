import { Route, Switch } from "react-router-dom";
import Program from "./Program";
import ProgramCreate from "./ProgramCreate";
import Programs from "./Programs";
import Workout from "./Workout";
import Workouts from "./Workouts";
import WorkoutCreate from "./WorkoutCreate";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import RolesRoute from "./RolesRoute";
import SecretBooks from "./SecretBooks";

const MeFit = () => (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/">
        <Programs/>
      </Route>
      <Route exact path="/programs/new">
        <ProgramCreate/>
      </Route>
      <Route path="/programs/:programId">
        <Program/>
      </Route>
      <Route exact path="/workouts">
        <Workouts/>
      </Route>
      <Route exact path="/workouts/new">
        <WorkoutCreate/>
      </Route>
      <Route path="/workouts/:workoutId">
        <Workout/>
      </Route>
      <RolesRoute path="/secret" roles={['admin']}>
        <SecretBooks/>
      </RolesRoute>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
  </>
)

export default MeFit
