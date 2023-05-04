'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Retroalimentacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // Relación muchos a uno con Usuario
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });

      this.hasMany(models.votosRetroalimentacion, { foreignKey: 'idRetroalimentacion' });
    }
    
  }
  Retroalimentacion.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },    
    idUsuario: DataTypes.INTEGER,
    fechaRetroalimentacion: DataTypes.DATE,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Retroalimentacion',
    tableName: 'Retroalimentacion',
    timestamps: false,
  });
  return Retroalimentacion;
};