import  * as React from 'react'
import {Item} from "./item";
import * as service from '../../service/service'
import {Loader} from "../loader/loader";

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
        this.LoadData();
    }

    render() {
        return (
            <div>
                <table className="table table-inverse table-hover animated bounceInUp">
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
                        <button className="btn btn-primary" disabled={this.state.currentPage == 1}
                                onClick={()=>this.getUserPage(0)}>
                            <i className="glyphicon glyphicon-arrow-left"></i>
                        </button>
                        &nbsp;&nbsp;
                        <button className="btn btn-primary"
                                disabled={this.state.currentPage == this.state.total_page}
                                onClick={()=>this.getUserPage(1)}>
                            <i className="glyphicon glyphicon-arrow-right"></i>
                        </button>

                    </div>
                </div>
            </div>
        )
    }

}