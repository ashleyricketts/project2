module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.TEXT,
    user_photo:DataTypes.TEXT,
    email: DataTypes.STRING,
    dog: DataTypes.BOOLEAN,
    cat: DataTypes.BOOLEAN,
    bird: DataTypes.BOOLEAN,
    reptile: DataTypes.BOOLEAN,
    pet_names: DataTypes.STRING
  });
  return Users;
};
