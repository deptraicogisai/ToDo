import * as React from "react";
import * as ReactDOM from "react-dom";
import {Home} from "./home";
import {Router, browserHistory, Route} from 'react-router'
import {List} from "./list";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="/list" component={List}/>
        </Route>
    </Router>,
    document.getElementById('root')
);

console.log("Init");