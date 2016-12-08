import * as React from 'react'
import {store} from "../../stores/index";

export class Toastr extends React.Component<{},{}> {

    componentDidMount() {

        store.noticeStore.subscribe(() => {
            let state = store.noticeStore.getState();

            alert(state.notice.message);

        });
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}