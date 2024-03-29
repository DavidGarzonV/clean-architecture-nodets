import { DataTypes, Model } from 'sequelize';
import { v4 as uuid } from 'uuid';
import { sequelize } from '../connection';

class OfferModel extends Model { }

OfferModel.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: uuid()
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Offer',
  tableName: 'offers',
  timestamps: true,
});

export default OfferModel;