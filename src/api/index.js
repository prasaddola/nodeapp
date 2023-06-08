const express = require('express')
require('dotenv').config()

const app = express()
const port = 4000
app.get("/health", (req, res) => res.send({ "meesage": "APP1 200 OK testing"}) )
app.listen(port, () => console.log(`Example backend API listening on port ${port}!`))
