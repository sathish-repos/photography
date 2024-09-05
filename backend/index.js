const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send(`<h1>welcome to snapbykeerthyy.com bacend</h1>`)
})

app.listen(port, () => {
    console.log(`backend connected in port: ${port}`)
})
