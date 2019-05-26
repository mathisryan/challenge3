const express = require('express')
const app = express()
const port = 3002

app.use(express.static('assets'))
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile('./public/index.html'))

app.listen(port, () => console.log(`Listening on port ${port}`))