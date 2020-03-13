const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const songRouter = require('./routes/song-router');

const app = express();
const apiPort = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('We out here');
});

app.use('/api', songRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

// need to have a parent ask then child suggestions.
// brew services start mongodb-community
// https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66