import axios from 'axios';
import React, { Component } from 'react';
import Table from './Table';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      timesheet: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get('/api/timesheet');
    console.log('data', data);
    this.setState({ timesheet: data });
  }

  render() {
    return (
      <div>
        <h1>Timesheet Entries by Project</h1>
        <Table timesheet={this.state.timesheet} />
      </div>
    );
  }
}

export default Main;
