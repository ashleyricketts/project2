module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    link: DataTypes.TEXT,
    address: DataTypes.STRING,
    pet_types: DataTypes.STRING,
    host_name: DataTypes.STRING
  });

  Events.associate = function(models) {
    //event should belong to a user
    Events.belongsTo(models.Users, {
      //foreignKey: {
       // allowNull: false
     // }
    });
  };

  return Events;
};
