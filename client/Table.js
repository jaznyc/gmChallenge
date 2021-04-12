import React from 'react';

const Table = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th className="left">Name</th>
          <th className="left">Client</th>
          <th className="right">Hours</th>
          <th className="right">Billable Hours</th>
          <th className="right">Billable Amount</th>
        </tr>

        {props.timesheet ? (
          props.timesheet.map((entry, idx) => {
            return (
              <tr key={idx}>
                <td className="blueText">{entry.projectName}</td>
                <td className="blueText">{entry.client}</td>
                <td className="blueText right">{entry.hours.toFixed(2)}</td>
                <td className="right">
                  {entry.billableHours.toFixed(2)} (
                  {((entry.billableHours / entry.hours) * 100).toFixed(0)}%)
                </td>
                <td className="right">
                  {entry.billableAmount > 0
                    ? `$ ${entry.billableAmount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}`
                    : '-'}
                </td>
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
