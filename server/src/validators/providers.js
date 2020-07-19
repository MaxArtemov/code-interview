
export const deleteProvider = async function(req,res, next) {
    if(!req.body.payload || !req.body.payload.name) {
        res.sendStatus(400)
      } else {
        next()
      }
}