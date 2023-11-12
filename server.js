const dotenv = require('dotenv') // .env file
dotenv.config() // using .env
const connectionString = `mongodb+srv://${process.env.USER}:${process.env.PW}@cluster0.9accb.mongodb.net/starwars2023?retryWrites=true&w=majority`

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

// Connect to Database
MongoClient.connect(connectionString)
.then(client => {
    console.log('Connected to Database')

    // MIDDLEWARE
    // Make sure you place body-parser before your CRUD handlers!
    app.use(bodyParser.urlencoded({ extended: true }))

    // All your handlers here...
    app.get('/', (req, res) => {
        //res.send('Hello World')
        res.sendFile(__dirname + '/index.html')
        // Note: __dirname is the current directory you're in. Try logging it and see what you get!
        // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
        // Mine: C:\Users\eengl\OneDrive\Documents\htdocs\bootcamp\zellwk-com-crud\starwars2023
    })

    app.post('/quotes', (req, res) => {
        //console.log('Helloooooooooooooo!')
        console.log(req.body)
    })


    app.listen(3000, function () {
        //console.log(`__dirname is: ${__dirname}`)
        console.log('Listening on 3000')
    })
})
.catch(error => console.error(error))

