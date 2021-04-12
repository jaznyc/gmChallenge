import React from 'react';

const Table = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>ProjectName</th>
          <th>ClientName</th>
          <th>Hours</th>
          <th>BillableHours</th>
          <th>BillableAmount</th>
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
