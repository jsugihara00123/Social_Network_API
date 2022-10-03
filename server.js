const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.jsoon());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('.routes'));

mongoose.connect(process.engMONGODB_URI || 'mongodb://localhost/social-netowork', {
  useFindAndModify: false,
  useNewUrLParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(port, () => console.log(`connected on localhost:${PORT}`));