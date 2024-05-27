const express = require('express')
const routes = require('./routes');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/movies', routes.moviesRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
