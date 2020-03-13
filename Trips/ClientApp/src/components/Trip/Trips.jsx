import React, {Component} from 'react';
import axios from 'axios';
export class Trips extends Component
{
    constructor(props){
        super(props);

        this.onTripUpdate = this.onTripUpdate.bind(this);
        this.onTripDelete = this.onTripDelete.bind(this);

        this.state = {
            trips: [],
            loading: true,
            failed: false,
            error: ''
        }
    }

    componentDidMount(){
        this.populateTripsData();
    }

    onTripUpdate(id){
        const {history} = this.props;
        history.push('/update/'+id);
    }

    onTripDelete(id){
        const {history} = this.props;
        history.push('/delete/'+id);
    }

    populateTripsData(){
        axios.get("api/Trips/GetTrips").then(result => {
            const response = result.data;
            this.setState({trips: response, loading: false, failed: false, error:""});
        }).catch(error => {
            this.setState({trips: [], loading: false, failed: true, error:"Trips could not be loaded"});
        });
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
                    {
                        trips.map(trip => (
                        <tr key={trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toISOString().slice(0,10)}</td>
                            <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0,10) :  '-' }</td>
                            <td>
                                <div className="form-group">
                                    <button onClick={() => this.onTripUpdate(trip.id)} className="btn btn-success">
                                        Update
                                    </button>
                                    <button onClick={() => this.onTripDelete(trip.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        );
    }

    render(){

        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : ( this.state.failed ? (
            <div className="text-danger">
                <em>{this.state.error}</em>
            </div>
        ) : (
            this.renderAllTripsTable(this.state.trips))
        )

        return (
            <div>
                <h1>All trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>
        );
    }
}