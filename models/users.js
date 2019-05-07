module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user_name: DataTypes.TEXT,
    user_photo: DataTypes.TEXT,
    email: DataTypes.STRING,
    pet_types: DataTypes.STRING,
    pet_names: DataTypes.STRING
  });

  Users.associate = function(models) {
    //associating users with events
    //when author is deleted - it will also delete their created events
    Users.hasMany(models.Events, {
      onDelete: "cascade"
    });
  };
  
  return Users;
};
