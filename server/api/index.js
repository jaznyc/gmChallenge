const router = require('express').Router();
module.exports = router;

router.use('/timesheet', require('./timesheet'));

router.use(function (req, res, next) {
  const err = new Error('Not Found.');
  err.status = 400;
  next(err);
});
