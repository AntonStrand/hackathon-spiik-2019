const router = require('express').Router()
const ChildModel = require('../models/children')

router.post('/:childId', (req, res) => {
  const childId = req.params.childId
  const { saldo } = req.body

  // TODO: Check if parrent have access to child

  if (!saldo) {
    res.json({ error: 'You need to submit amount as new saldo' })
  } else {
    ChildModel.findOneAndUpdate({ _id: childId }, { saldo })
      .then(data => {
        res.json({ result: 'Done, your kid have a lot of money now!' })
      }).catch(e => {
        console.log(e)
        res.json({ error: 'Unknown error' })
      })
  }
})

module.exports = router
