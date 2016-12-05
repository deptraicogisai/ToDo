import * as React from 'react'
export class UserLayout extends React.Component<{},{}> {
    render() {
        return (
            <div className="container">
                <div className="col-md-offset-2 col-md-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">User List</div>
                        <div className="panel-body">
                            { this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}