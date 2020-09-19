const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mssql = require('mssql');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const config = {
    user :'mssql2',
    password :'Djc=69318',
    server:'jason-hp\\sqlexpress',
    database:'AP',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS',
port: 1433
}
};

mssql.connect(config);
const connection = mssql.connection;
console.log("MSSQL database connection established successfully");

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});