const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')


const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Testing OK')
})

app.get ('*',(req,res)=>{
    res.send('BAD_REQUEST')
})

app.listen(config.get('port'),()=>{
    console.log(`Server is running on port ${config.get('port')}`)
})