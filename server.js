const express = require('express')
const app = express()
const host = '127.0.0.1'
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/html/index.html`))
})

app.listen(port, host, () => console.log(`App listening on ${host}:${port}`))