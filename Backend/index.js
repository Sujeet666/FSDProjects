const express = require('express')
// const users = require('./src/users');

require('dotenv').config()
const app = express()

// console.log(process.env.port)

app.get('/', function (req, res) {
  res.send('Hello World')
})
// app.get('/api/users',users.getUser);

app.listen(process.env.port, ()=>{
    console.log("Listening......", process.env.port)
})