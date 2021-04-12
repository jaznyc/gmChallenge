import axios from 'axios';
import React, { Component } from 'react';
import Table from './Table';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      timesheet: [],
    };
  }

  async componentDidMount() {
    try {
      let { data } = await axios.get('/api/timesheet');
      console.log('data', data);
      this.setState({ timesheet: data });
    } catch (err) {
      console.eror('Error in get all timesheets', err.message);
    }
  }

  render() {
    return (
      <div>
        <h1>Timesheet Entries by Project</h1>
        <Link to="/form">
          <button>Create New Entry</button>
        </Link>
        <Table timesheet={this.state.timesheet} />
      </div>
    );
  }
}

export default Main;
