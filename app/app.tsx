import * as React from "react";
import * as ReactDOM from "react-dom";
import {Home} from "./components/home/home";
import {Router, browserHistory, Route, IndexRoute} from 'react-router'
import {List} from "./components/user/list";
import {Main} from "./main";
import {ItemDetail} from "./components/user/item-detail";
import {UserLayout} from "./components/user/user";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="/user" component={UserLayout}>
                <IndexRoute component={List}/>
                <Route path="/user/:userId" component={ItemDetail}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);

console.log("Init");