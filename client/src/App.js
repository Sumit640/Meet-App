import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Teams from "./components/Teams";

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/" exact>
                        <Teams />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
