const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const app=express();
const dotenv = require('dotenv');

dotenv.config();
require('./db');

const port = process.env.PORT || 5000;
app.use(cors())

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

const Notes=require('./routes/note')

app.use("/note",Notes)


app.listen(port, () => {
    console.log(`Server started at ${port} successfully`);
})
