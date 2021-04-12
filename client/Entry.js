import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Entry extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      client: '',
      project: '',
      projectCode: '',
      hours: 0.0,
      billable: '',
      fistName: '',
      lastName: '',
      billableRate: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      let { data } = await axios.post('/api/timesheet', this.state);
      this.setState({
        date: '',
        client: '',
        project: '',
        billable: '',
        projectCode: '',
        hours: 0.0,
        billable: '',
        firstName: '',
        lastName: '',
        billableRate: 0,
      });
    } catch (err) {
      console.error('Error posting new entry', err.message);
    }
  }

  render() {
    return (
      <div>
        <h1>Enter New Time Entry</h1>
        <div>
          <Link to="/">Return to Home Page</Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="date">
              <small>Date:</small>
            </label>
            <input
              name="date"
              type="text"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="client">
              <small>Client:</small>
            </label>
            <input
              name="client"
              type="text"
              value={this.state.client}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="project">
              <small>Project:</small>
            </label>
            <input
              name="project"
              type="text"
              value={this.state.project}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="projectCode">
              <small>Project Code:</small>
            </label>
            <input
              name="projectCode"
              type="text"
              value={this.state.projectCode}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="hours">
              <small>Hours:</small>
            </label>
            <input
              name="hours"
              type="text"
              value={this.state.hours}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="billable">
              <small>Billable:</small>
            </label>
            <input
              name="billable"
              type="text"
              value={this.state.billable}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="firstName">
              <small>First Name:</small>
            </label>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">
              <small>Last Name:</small>
            </label>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="billableRate">
              <small>Billable Rate:</small>
            </label>
            <input
              name="billableRate"
              type="text"
              value={this.billableRate}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Entry;
