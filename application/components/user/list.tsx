import  * as React from 'react'
import {Item} from "./item";
import * as service from '../../clients/service'
import {Loader} from "../loader/loader";
import {Constant} from "../../constants/constant";
import {store} from "../../stores/index";

interface ListState {
    list: any;
    currentPage?: number;
    total_page?: number;
    isLoading: boolean
}

export class List extends React.Component<{},ListState> {

    state: ListState = {
        list: [],
        currentPage: 1,
        isLoading: false
    }

    getUserPage(flag: number) {
        if (flag == 1) {
            this.state.currentPage = this.state.currentPage + 1;
        } else {
            this.state.currentPage = this.state.currentPage - 1;
        }

        this.setState(this.state);

        this.LoadData();
    }

    async LoadData() {
        this.state.isLoading = true;

        this.setState(this.state);

        let data = await service.getAllUser(this.state.currentPage);
        this.setState(
            this.state = {
                list: data.data,
                currentPage: this.state.currentPage,
                total_page: data.total_pages,
                isLoading: false
            }
        )
    }

    componentDidMount() {
        store.panelStore.dispatch(
            {
                type: Constant.UserPage
            }
        );
        this.LoadData();
    }

    render() {
        return (
            <div>
                <table className="table table-inverse table-hover">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                    <tbody>
                    {
                        this.state.list ?
                            this.state.list.map((item, index) => {
                                return <Item item={item} key={index} index={index}/>
                            }) : <span>No Records</span>
                    }
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-4">
                        <Loader isLoading={this.state.isLoading}/>
                    </div>
                    <div className="col-md-7 text-right">
                        <a href="#"
                           className={`hvr-icon-back ${this.state.currentPage == 1 && 'btn-is-disabled'}`}
                           style={{'text-decoration': 'none'}}
                           onClick={() => this.getUserPage(0)}>Previous</a>
                        &nbsp;&nbsp;
                        <a href="#"
                           className={`hvr-icon-forward ${this.state.currentPage == this.state.total_page && 'btn-is-disabled'}`}
                           style={{'text-decoration': 'none'}}
                           onClick={()=>this.getUserPage(1)}>Next</a>
                    </div>
                </div>
            </div>
        )
    }

}