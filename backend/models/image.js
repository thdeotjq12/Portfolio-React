module.exports = (sequelize, DataTypes) =>{
  const Image = sequelize.define('Image', {
      src:{
          type: DataTypes.STRING(200),
          allowNull: false,
      },
     
  }, {
      charset: 'utf8', // 한글 + 이모티콘
      collate: 'utf8_general_ci', // 한글이 저장됨
  });
  Image.associate = (db) => {  
      db.User.belongsTo(db.Post);
  };
  return Image;
}