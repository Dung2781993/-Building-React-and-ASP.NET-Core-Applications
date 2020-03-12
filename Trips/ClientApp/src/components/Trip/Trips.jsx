import React, {Component} from 'react';


export class Trips extends Component
{
    constructor(props){
        super(props);

        this.state = {
            trips: [],
            loading: true
        }
    }

    renderAllTripsTable(trips){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date started</th>
                        <th>Date completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Hellomama</td>
                    <td>Hellomama</td>
                    <td>Hellomama</td>
                    <td>Hellomama</td>
                    <td>Hellomama</td>
                </tbody>
            </table>
        )
    }

    render(){

        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
            this.renderAllTripsTable(this.state.trips)
        )

        return(
            <div>
                <h1>All trips</h1>
                <p>You can see all trips</p>
                {content}
            </div>
        );                                                                   
    }
}