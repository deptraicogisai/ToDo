import * as React from 'react'
import {Constant} from "../../constants/constant";
import {panelStore} from "../../stores/store";

interface  UserState {
    title: string
}

export class UserLayout extends React.Component<{}, UserState> {

    state: UserState = {
        title: Constant.UserPage
    }

    componentDidMount() {
        panelStore.subscribe(() => {
            this.state.title = panelStore.getState().title;
            this.setState(this.state);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-offset-2 col-md-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">{this.state.title}</div>
                        <div className="panel-body">
                            { this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}