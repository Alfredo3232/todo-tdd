const mongoose = require("mongoose");

function connect() {
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((con) => {
      console.log('your not in the then block ', con)

    })
    .catch((err) => {
      console.log('you connected', err)
    })
}

module.exports = { connect };