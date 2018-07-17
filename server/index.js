const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let port = process.env.PORT || 3000;
app.use(bodyParser.json()); // :D
app.use(express.static(`${__dirname}/../client/`))


app.listen(port, () => {
  console.log(`Connected to port ${port}...`);
})