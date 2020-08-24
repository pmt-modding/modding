
// FILENAME: db.js

const mongoose = require("mongoose");

//Replace this wiith your MONGOURI
const MONGOURI ="mongodb+srv://RyanGregoire:<Mustanglover4455>@cluster0.imcxa.mongodb.net/test";

const InitiateMongodbServer = async () => {
    try{
        await mongoose.connect(MONGOURI, {
            USEnEWuRlParser: true
        });
        console.log("Connected to DB !!");
    } catch(e) {
        console.log(e);
        throw e;
    } 

    };
    module.exports = InitiateMongoServer
