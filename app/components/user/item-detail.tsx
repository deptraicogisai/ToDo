import * as React from 'react'
import * as service from '../../service/service'
import {store} from "../../stores/store";
import {Constant} from "../../constants/constant";

import {browserHistory} from 'react-router';

interface UserDetailState {
    item: any;
}

export class ItemDetail extends React.Component<any,UserDetailState> {

    state: UserDetailState = {
        item: {}
    }

    async componentDidMount() {
        store.dispatch(
            {
                type: Constant.UserDetailPage
            }
        );

        const data = await service.getUserDetail(this.props.params.userId);

        this.state.item = data;

        this.setState(this.state);
    }

    Back() {
        browserHistory.push('/user');
    }

    render() {
        return (
            <div>
                <img src={this.state.item.avatar} className="wow animated slideInRight" data-wow-duration="1000ms"
                     data-wow-delay="500ms"/>
                <h2 className="wow animated slideInUp" data-wow-duration="2000ms"
                    data-wow-delay="1000ms">{this.state.item.first_name} - {this.state.item.last_name} </h2>
                <div>
                    <a href="#" className="hvr-icon-back" style={{'text-decoration': 'none'}}
                       onClick={()=>this.Back()}>Back</a>
                </div>
            </div>
        )
    }
}