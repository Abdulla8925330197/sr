import express from 'express';
import stationRouter from './stations.js';
import trainRoutes from './trains.js'
var router = express.Router();


router.get('/', function(req, res, next) {
  res.status(200).json({message:'route is running'})
});
router.use('/stations', stationRouter);
router.use('/trains', trainRoutes);

export default router;
