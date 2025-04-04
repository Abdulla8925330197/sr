import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Station extends Model {
    static associate(models) {
      
      Station.hasMany(models.Train, {
        foreignKey: 'stationId', 
        as: 'trains',
        onDelete: 'CASCADE'
      });
    }
  }

  Station.init(
    {
      stationName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Station',
      timestamps: true
    }
  );

  return Station;
};
