module.exports = function(sequelize, DataTypes) {
  var Collab = sequelize.define("Collab", {
    // Giving the Collab model a name of type STRING
    name: DataTypes.STRING
  });

  Collab.associate = function(models) {
    // Associating Collab with Posts
    // When an Collab is deleted, also delete any associated Posts
    Collab.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Collab;
};
