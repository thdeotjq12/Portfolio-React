module.exports = (sequelize, DataTypes) =>{
    const Hashtag = sequelize.define('Hashtag', {
        name:{
            type: DataTypes.STRING(20), 
            allowNull: false, 
        },
      
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 한글이 저장됨
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongToMany(db.Post, { through: 'PostHashtag'});
        
    };
    return Hashtag;
}