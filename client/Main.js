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
      this.setState({ timesheet: data });
    } catch (err) {
      console.eror('Error in get all timesheets', err.message);
    }
  }

  render() {
    return (
      <div id="mainPage">
        <div id="mainTitle">
          <h1 className="darkGray">Timesheet Entries by Project</h1>
        </div>
        <div id="button">
          <Link to="/form">
            <button>Create New Entry</button>
          </Link>
        </div>
        <div id="totals">
          <div id="hoursTracked">
            <h4 className="gray">Hours Tracked</h4>
            <h2>
              {this.state.timesheet ? (
                this.state.timesheet
                  .reduce((accum, currVal) => {
                    return accum + currVal.hours;
                  }, 0)
                  .toLocaleString()
              ) : (
                <div></div>
              )}
            </h2>
          </div>
          <div id="billAmt">
            <h4 className="gray">Billable Amount</h4>
            <h2>
              $
              {this.state.timesheet ? (
                this.state.timesheet
                  .reduce((accum, currVal) => {
                    return accum + currVal.billableAmount;
                  }, 0)
                  .toLocaleString(undefined, { minimumFractionDigits: 2 })
              ) : (
                <div></div>
              )}
            </h2>
          </div>
        </div>
        <div id="table">
          <Table timesheet={this.state.timesheet} />
        </div>
      </div>
    );
  }
}

export default Main;
