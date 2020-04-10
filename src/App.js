import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import 'bulma/css/bulma.css';
import Login from "./pages/Login";
import {Detail} from "./pages/Detail";
import {NotFound} from "./pages/NotFound";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/detail' component={Detail}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
