module.exports=(sequelize,Sequelize)=>{

    /*
    
    Visualize like this,,POST is a function that actually defines the schema.
    it is going to be a schema function which will be assigned to na table called posts
    so db.posts=POSTS() where posts is a table, db is the whole database system and POST is the schema/ desc
    in mysql if we did desc posts; it would give us the object/columns returned by POST and an additional createdAt, id and updatedAt
    
    
    
     */
    const POST=sequelize.define("POST",{


        title:{
            type:Sequelize.STRING
        },
        description:{
            type:Sequelize.STRING
        },
        published:{
            type:Sequelize.BOOLEAN
        }
    })
    return POST

}