const dbConfig= require("../config/dbconfig")// configuration for the database
const Sequelize= require("sequelize")
const sequelize= new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    
    
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idlle:dbConfig.pool.idle
        }
    }
    )
    const db={}
    db.Sequelize=Sequelize
    db.sequelize=sequelize
    db.posts=require("./Post")(sequelize,Sequelize)
    
    module.exports=db
