import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export class createevent extends Component {
    constructor(props) {
        super(props);

        this.onChangename = this.onChangename.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            date: new Date()
        }
    }

    //   componentDidMount() {
    //     axios.get('http://localhost:3000/user')
    //       .then(response => {
    //         if (response.data.length > 0) {
    //           this.setState({
    //             user: response.data.map(user => user.username),
    //             name: response.data[0].name
    //           })
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })

    //   }

    onChangename(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const event = {
            name: this.state.name,
            description: this.state.description,
            date: this.state.date
        }

        console.log(event);

        axios.post('http://localhost:3000/event/add', event)
            .then();

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h2>Create New Event Log</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangename}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="input-field col s12">
                        <input type="submit" value="Create Event Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default createevent
