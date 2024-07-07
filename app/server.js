const express = require('express')
const routes = require('./routes');
const app = express();
const sequelize = require('./db');
const port = 3000

app.use(express.json());
app.use('/movies', routes.moviesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const cleanupHook = () => {
  console.log("Graceful Shutdown...");
  console.log("Closing database connections...");
  sequelize.close();
  process.exit(0)
}

process.on('SIGTERM', cleanupHook);
process.on('SIGINT', cleanupHook);
