import * as React from 'react'
import * as service from '../../service/service'

interface UserDetailState {
    item: any;
}

export class ItemDetail extends React.Component<any,UserDetailState> {

    state: UserDetailState = {
        item: {}
    }

    async componentDidMount() {
        const data = await service.getUserDetail(this.props.params.userId);
        this.setState(
            this.state = {
                item: data
            }
        )
    }

    render() {
        return (
            <div>THis is detail page {this.state.item.first_name}</div>
        )
    }
}