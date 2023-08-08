const express = require('express');
const app = express();
const { db } = require('./db');

if (process.env.NODE_ENV !== 'produnction') {
       require('dotenv').config({ path: "config.env" });
}


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//DB
db();

const userroutes = require('./routes/user');

app.use('/api/v1', userroutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
       console.log(`server is running on port ${process.env.PORT}`);
});
