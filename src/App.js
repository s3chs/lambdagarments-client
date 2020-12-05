import NavMain from "./Components/Nav/NavMain";
import Home from "./Pages/Home";
import Clothes from "./Pages/Clothes";
import AddGarm from "./Pages/AddGarm";
import OneGarm from "./Pages/OneGarm";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import EditGarm from "./Pages/EditGarm";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clothes" component={Clothes} />
        <Route exact path="/clothes/add" component={AddGarm} />
        <Route exact path="/clothes/:id" component={OneGarm} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/clothes/:id/edit" component={EditGarm} />
      </Switch>
    </div>
  );
}

export default App;
