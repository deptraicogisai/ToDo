import * as React from 'react'
import {store} from './stores/store'
import {Link} from 'react-router';

interface MainState {
    title?: string
    isLogin: boolean
}

export class Main extends React.Component<{},MainState> {

    componentWillMount() {

        this.setState(
            this.state = {
                isLogin: false
            }
        )

        store.subscribe(() => {
            this.setState(
                this.state = {
                    isLogin: store.getState().isLogin
                }
            )
        });
    }

    Login() {
        store.dispatch(
            {type: 'Login'}
        );
    }


    Logout() {
        store.dispatch(
            {
                type: 'Logout'
            }
        )
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link activeClassName="active" to="/">Home</Link>
                            </li>
                            <li><Link activeClassName="active" to="/user">List</Link>
                            </li>
                            <li><Link activeClassName="active" to="/user/3">Detail</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {this.state.isLogin ?
                                (
                                    <li><a href="#" onClick={()=>this.Logout()}><span
                                        className="glyphicon glyphicon-log-out"></span> Log Out</a></li>
                                )
                                : (
                                <li><a href="#" onClick={()=>this.Login()}><span
                                    className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            )}
                        </ul>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}