const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next)=>{
  try{
    const timesheet = await timesheet.findAll()
    res.json(timesheet)
  }catch(err){
    next(err)
  }
})
