import React from 'react';

const Table = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Client</th>
          <th>Hours</th>
          <th>Billable Hours</th>
          <th>Billable Amount</th>
        </tr>

        {props.timesheet ? (
          props.timesheet.map((entry, idx) => {
            return (
              <tr key={idx}>
                <td>{entry.projectName}</td>
                <td>{entry.client}</td>
                <td>{entry.hours.toFixed(2)}</td>
                <td>{entry.billableHours.toFixed(2)}</td>
                <td>${entry.billableAmount.toLocaleString()}</td>
              </tr>
            );
          })
        ) : (
          <div>No Timesheet Entries to Display</div>
        )}
      </tbody>
    </table>
  );
};

export default Table;
