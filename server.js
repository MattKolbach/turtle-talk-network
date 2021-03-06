const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); //what is this for?
app.use(express.urlencoded({ extended: true })); //what is this for?
app.use(express.static('public')); //what is this for?

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/turtletalkdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
