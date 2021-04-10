const router = require('express').Router();
const { Timesheet } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const timesheet = await Timesheet.findAll();
    res.json(timesheet);
  } catch (err) {
    next(err);
  }
});
