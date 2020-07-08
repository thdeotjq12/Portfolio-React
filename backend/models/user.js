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
  User.associate = (db) => {
      db.User.hasMany(db.Post, {as: 'Post' });
      db.User.hasMany(db.Comment);
      db.User.belongToMany(db.Post, { through: 'Like', as: 'Liked'});
      db.User.belongToMany(db.User, { through: 'Follow', as: 'Followers'}); // as로 구별함, 가져올때도 as에 설정한 이름으로 가져와서 편리함
      db.User.belongToMany(db.User, { through: 'Follow', as: 'Followings'});
  };
  return User;
}