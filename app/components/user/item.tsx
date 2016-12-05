import * as React from 'react';
import {browserHistory} from 'react-router';

interface ItemProp {
    item: any;
    index: number
}

export class Item extends React.Component<ItemProp,{}> {
    ViewUserDetail() {
        browserHistory.push('/user/' + this.props.item.id);
    }

    render() {
        return (
            <tr className={this.props.index % 2 ? 'info' : 'success'} onClick={()=>this.ViewUserDetail()}>
                <td>
                    {this.props.item.id}
                </td>
                <td>
                    {this.props.item.first_name}
                </td>
                <td>
                    {this.props.item.last_name}
                </td>
                <td>
                    <img src={this.props.item.avatar}/>
                </td>
            </tr>
        )
    }
}