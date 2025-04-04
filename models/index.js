import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import StationModel from './station.js';
import TrainModel from './train.js';

const sequelize = new Sequelize(config.development);

const Station = StationModel(sequelize);
const Train = TrainModel(sequelize);

// Define associations
Station.hasMany(Train, { foreignKey: 'stationId', as: 'trains' });
Train.belongsTo(Station, { foreignKey: 'stationId', as: 'station' });

export { sequelize, Station, Train };
