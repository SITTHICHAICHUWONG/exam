const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

app.get('/api', function (req, res) {
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})