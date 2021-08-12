const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world from index')
})

app.get('/api/api', (req, res) => {
    res.send('Hello world from api')
})

app.listen(3000, () => console.log('Server running on port 3000'))
