import  * as React from 'react';
import {Link} from 'react-router';

interface HomeState {
    title: string
}

export class Home extends React.Component<{},{}> {

    render() {
        return (
            <div>
                <div>This is home page</div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/list">List</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}