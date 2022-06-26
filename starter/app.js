
const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json());

app.get('/hello', (req, res)=>{
    res.send('Task Manager App');
})

app.use('/api/v1/task', tasks);

const port = 3000;

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('server is listining at port '+port));
    }catch(err){
        console.log(err);
    }
}

start();