module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.TEXT,
    user_photo: DataTypes.TEXT,
    email: DataTypes.STRING,
    pet_types: DataTypes.STRING,
    pet_names: DataTypes.STRING
  });
  return Users;
};
