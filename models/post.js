module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Collab
    // A Post can't be created without an Collab due to the foreign key constraint
    Post.belongsTo(models.Collab, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
