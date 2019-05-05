module.exports = function(sequlize, DataTypes) {
    var Events = sequelize.define("Events", {
        event_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        date: DataTypes.DATE,
        time: DataTypes.TIME,
        link: DataTypes.TEXT,
        address: DataTypes.STRING,
        pet_types: DataTypes.STRING,
        host_name: DataTypes.STRING
    });
    return Events
}