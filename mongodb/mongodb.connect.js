const mongoose = require("mongoose");

function connect() {
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('You connected to MongoDB')

    })
    .catch((err) => {
      console.log('You did not connect to MongoDB', err)
    })
}

module.exports = { connect };