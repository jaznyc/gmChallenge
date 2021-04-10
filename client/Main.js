import axios from 'axios';
import React, { Component } from 'react';

class Main extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    let { data } = await axios.get('/api/timesheet');
    console.log('data', data);
  }

  render() {
    return (
      <div>
        <h3>This is the appppp</h3>
      </div>
    );
  }
}

export default Main;
