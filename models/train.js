import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Train extends Model {
    static associate(models) {
      // A Train belongs to a Station
      Train.belongsTo(models.Station, {
        foreignKey: 'stationId', // Ensure correct foreign key
        as: 'station',
        onDelete: 'CASCADE'
      });
    }
  }

  Train.init(
    {
      trainName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stationId: { // Make sure this matches the FK in your database
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Stations',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Train',
      timestamps: true
    }
  );

  return Train;
};
