const router = require('express').Router();
const { Timesheet } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const timesheet = await Timesheet.findAll();
    let collapsedTimesheet = collapseData(timesheet);
    let timesheetData = makeArray(collapsedTimesheet);
    res.json(timesheetData);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newEntry = await Timesheet.create(req.body);
    res.json(newEntry);
  } catch (err) {
    next(err);
  }
});

const collapseData = (entriesArr) => {
  let dataObj = {};
  for (let i = 0; i < entriesArr.length; i++) {
    let currEntry = entriesArr[i];
    let projectCode = currEntry.projectCode;
    if (dataObj[projectCode]) {
      dataObj[projectCode]['hours'] += +currEntry.hours;
      if (currEntry.billable === 'Yes') {
        dataObj[projectCode]['billableHours'] += +currEntry.hours;
        dataObj[projectCode]['billableAmount'] +=
          +currEntry.hours * currEntry.billableRate;
      }
    } else {
      dataObj[projectCode] = {};
      dataObj[projectCode]['client'] = currEntry.client;
      dataObj[projectCode]['projectName'] = currEntry.project;
      dataObj[projectCode]['hours'] = +currEntry.hours;
      dataObj[projectCode]['billableHours'] = 0;
      dataObj[projectCode]['billableAmount'] = 0.0;
      if (currEntry.billable === 'Yes') {
        dataObj[projectCode]['billableHours'] += +currEntry.hours;
        dataObj[projectCode]['billableAmount'] +=
          +currEntry.hours * currEntry.billableRate;
      }
    }
  }
  return dataObj;
};

const makeArray = (dataObj) => {
  let dataArr = [];
  for (let key in dataObj) {
    let value = dataObj[key];
    value['projectCode'] = key;
    dataArr.push(value);
  }
  return dataArr;
};
