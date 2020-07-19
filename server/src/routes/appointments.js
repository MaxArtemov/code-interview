import express from 'express';
import { getAppointements as getValidator, postApp as postValidator } from '../validators/appointments'
import * as appointments from '../services/appointments'

const router = express.Router();

router.get('/', 
  getValidator,
  async function(req, res, next) {
    try {
      const { specialty, date, minScore = 0 } = req.query
      const result = await appointments.searchProviders({ threshold: minScore, specialty, time: date })
      res.json(result)
    } catch (e) {
      next(e)
  }
});


router.post('/', 
  postValidator,
  async function(req, res, next) {
    try {
      const { name, date } = req.body
      console.log({ name })
      const result = await appointments.setAppointment({ name, date })
      res.json(result)
    } catch (e) {
      next(e)
  }
});

export default router