import * as React from 'react'
import {Link, IndexLink} from 'react-router';
import auth from "./authentication/auth";
import {Constant} from "./constants/constant";
import {authStore} from "./stores/authStore";
import {UserLogin} from "./model/userLogin";
import {Toastr} from "./components/notification/toast";
import {store} from "./stores/index";
import {HelloWorldService} from "./service/HelloWorldService";

interface MainState {
    title?: string
    isLogin?: boolean,
    user?: UserLogin,
    message?: string;
}

export class Main extends React.Component<{},MainState> {

    service = new HelloWorldService();

    state: MainState = {
        isLogin: auth.getCurrentUser() != null,
        user: auth.getCurrentUser(),
        message: 'Loading'
    };

    async componentWillMount() {

        try {

            const message = await  this.service.getMessage();
            this.setState({message});

            const author = await this.service.getAuthors();
            console.log(author);

        } catch (error) {
            this.state.message = error;
            this.setState(this.state);
        }

        authStore.subscribe(() => {
            this.setState({
                isLogin: auth.getCurrentUser() != null,
                user: auth.getCurrentUser()
            });
        });
    }

    Login() {
        auth.login(Constant.Provider.Google);
    }

    Logout() {
        auth.logout();

        store.noticeStore.dispatch({
            type: Constant.Authentication.LogoutSuccess
        })
    }

    render() {
        return (
            <div>
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">

                        <IndexLink activeClassName="active" className="item" to="/">Home</IndexLink>

                        <Link activeClassName="active" className="item" to="/user">User</Link>

                        <div className="right menu">
                            {this.state.isLogin ?
                                [
                                    <a>
                                        <img className="ui mini circular image" src={this.state.user.photoURL}
                                             style={{'display': 'inline', 'width': '35px'}}/>
                                    </a>,
                                    <a href="#" onClick={()=>this.Logout()} className="ui item">
                                        <span className="glyphicon glyphicon-log-out"/>
                                        Log Out
                                    </a>
                                ]
                                : (
                                <a className="ui item" href="#" onClick={() => this.Login()}><span
                                    className="glyphicon glyphicon-log-in"></span> Login</a>
                            )}
                        </div>
                    </div>
                </div>
                {
                    this.props.children
                }
                <Toastr/>
            </div>
        )
    }
}