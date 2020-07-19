import express from 'express';
import * as providers from '../services/providers'
import { deleteProvider as deleteValidator } from '../validators/providers'

const router = express.Router();

router.post('/add',
  async function(req, res, next) {
    try {
      const { payload } = req.body
      await providers.upsertProvider(payload)
      res.sendStatus(200)
    } catch (e) {
      console.error(e)
      next(e)
  }
});

router.post('/delete', 
  deleteValidator,
  async function(req, res, next) {
    try {
      const { payload } = req.body
      await providers.deleteProvider(payload.name)
      res.sendStatus(200)
    } catch (e) {
      console.error(e)
      next(e)
  }
});

export default router