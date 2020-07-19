export const getAppointements = async function(req, res, next) {
    if(!req.query.specialty || !req.query.date || !Number.isInteger(+req.query.date)) {
      res.sendStatus(400)
    } else {
      next()
    }
}

export const postApp = async function(req,res, next) {
    console.log(" hey ")
    if(!req.body.name || !req.body.date || !Number.isInteger(+req.body.date)) {
        res.sendStatus(400)
      } else {
        next()
      }
}