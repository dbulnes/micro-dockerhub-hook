// runner.js for PM2
const micro = require('micro')
const index = require('./index.js')

const server = micro(index)
server.listen(3000)

