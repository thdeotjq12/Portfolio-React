module.exports = (sequelize, DataTypes) =>{
  const Comment = sequelize.define('Comment', {
      content:{
          type: DataTypes.TEXT, 
          allowNull: false, 
      },
    
  }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 한글이 저장됨
  });
  Comment.associate = (db) => {
      db.Comment.belongsTo(db.User);
      db.Comment.belongsTo(db.Post);
  };
  return Comment;
}