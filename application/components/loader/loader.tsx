import * as React from 'react'

interface  LoaderProps {
    isLoading: boolean;
}

export class Loader extends React.Component< LoaderProps,{}> {
    render() {
        return (
            <span>
                 <img src="../assets/image/ajax-loader.gif" hidden={!this.props.isLoading}/>
             </span>
        )
    }
}