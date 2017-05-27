const port = (process.env.PORT || 3000)
const path = require('path')
const express = require('express')

const app = express()
const indexPath = path.join(__dirname, 'public', 'index.html')

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (_, res) { res.sendFile(indexPath) })

app.listen(port)

console.log(`Listening at http://localhost:${port}`)