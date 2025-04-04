import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import stationRouter from './routes/stations.js';
import trainRouter from './routes/trains.js';
import config from './config/config.js';



const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use('/api', indexRouter);   
app.use('/api/users', usersRouter); 
app.use('/api/stations', stationRouter); 
app.use('/api/trains', trainRouter); 


app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: 'Server error',
    error: req.app.get('env') === 'development' ? err : {},
  });
});

export default app;
