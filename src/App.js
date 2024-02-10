import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { InsertUser } from "./components/InsertUser";
import { GetUserData } from "./components/UserMain";

function App() {
  const [res, setRes] = useState("");
  const [users, setUsers] = useState([]);
  return (
    <div>
      <div className="headerRes response">
        {res !== "" && <p>result: {res}</p>}
        {res === "" && <p>result</p>}
      </div>
      <Switch>
        <Route exact path="/">
          <GetUserData setRes={setRes} users={users} setUsers={setUsers} />
        </Route>

        <Route path="/signup">
          <InsertUser setRes={setRes} users={users} setUsers={setUsers} />
        </Route>
      </Switch>
      {/* <div className="headerRes">
        {res !== "" && <p>result: {res}</p>}
        {res === "" && <p>result</p>}
      </div> */}
    </div>
  );
}

export default App;
