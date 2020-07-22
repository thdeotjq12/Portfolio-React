module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define('User', {
      nickname:{
          type: DataTypes.STRING(20), // 20글자 이하
          allowNull: false, // 필수
      },
      userId:{
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true, // 고유한 값
      },
      password :{
          type: DataTypes.STRING(100),
          allowNull : false,
      },
  }, {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글이 저장됨
  });
  //5-16 7:35초 설명
  User.associate = (db) => {
      db.User.hasMany(db.Post, {as: 'Posts' });
      db.User.hasMany(db.Comment);
      db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked'});
      db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey:'FollowingId'}); // as로 구별함, 가져올때도 as에 설정한 이름으로 가져와서 편리함
      db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings',  foreignKey:'FollowerId'}); // foreignKey : 실제 db에서 구별하는 이름, as 는 자바스크립트 객체에서 사용
  };
  return User;
}