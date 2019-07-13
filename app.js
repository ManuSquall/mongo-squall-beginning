const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require("./db");
const collection = "todo";

//se connecter à notre base
port=47;
db.connect((err)=>{
    if(err){
        console.log("connexion à la db échouée");
        process.exit(1);
    }
    else{
        app.listen(port, ()=>{
            console.log("Connectée à la db, app en écoute sur le port "+port);
        });
    }
});