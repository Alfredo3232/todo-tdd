const express = require("express");
const todoRoutes = require("./routes/todo.routes");
const app = express();
const mongodb = require("./mongodb/mongodb.connect");

mongodb.connect()
    // .then((err) => {
    //     console.log('mongo connect if its null => ', err)
    // })

app.use(express.json());

app.use("/todos", todoRoutes)

app.get('/', (req, res) => {
    res.json('Hello World!');
});

// app.listen(3000, () => {
//     console.log('Server is Running!');
// });

module.exports = app;