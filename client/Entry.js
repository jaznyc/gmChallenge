import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Entry extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      client: '',
      project: '',
      projectCode: '',
      billable: '',
      fistName: '',
      lastName: '',
      billableRate: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Enter New Time Entry</h1>
        <div>
          <Link to="/">Return to Home Page</Link>
        </div>
        <form>
          <div>
            <label htmlFor="date">
              <small>Date:</small>
            </label>
            <input name="date" type="text" />
          </div>
          <div>
            <label htmlFor="client">
              <small>Client:</small>
            </label>
            <input name="client" type="project" />
          </div>
          <div>
            <label htmlFor="project">
              <small>Project:</small>
            </label>
            <input name="project" type="text" />
          </div>
          <div>
            <label htmlFor="projectCode">
              <small>Project Code:</small>
            </label>
            <input name="projectCode" type="text" />
          </div>
          <div>
            <label htmlFor="billable">
              <small>Billable:</small>
            </label>
            <input name="billable" type="text" />
          </div>
          <div>
            <label htmlFor="firstName">
              <small>First Name:</small>
            </label>
            <input name="firstName" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">
              <small>Last Name:</small>
            </label>
            <input name="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="billableRate">
              <small>Billable Rate:</small>
            </label>
            <input name="billableRate" type="text" />
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
