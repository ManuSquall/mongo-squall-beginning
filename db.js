const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = "crud_mongodb";
const url= "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser : true};

const state = {
    //au début nous n'avons pas de connexion
    db : null
};

const connect = (cb) =>{
    // s'il y a une connection
    if(state.db)
        cb();
    else{
        //s'il n'y a pas de connexion à la base de donnée, nous utilisons les mongoclient pour nous connecter
        MongoClient.connect(url, mongoOptions,(err, client) =>{
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
};

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
};

const getDB = ()=>{
    return state.db;
};

module.exports = {getDB, connect, getPrimaryKey};