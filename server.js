const express = require('express')
const app = express()


app.get('/', (req, res) => {
    //res.send('Hello World')
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
    // Mine: C:\Users\eengl\OneDrive\Documents\htdocs\bootcamp\zellwk-com-crud\starwars2023
})

app.post('/quotes', (req, res) => {
    console.log('Helloooooooooooooo!')
})


app.listen(3000, function () {
    console.log(`__dirname is: ${__dirname}`)
    console.log('Listening on 3000')
})