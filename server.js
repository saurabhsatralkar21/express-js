const express = require("express");
const app = express();


app.use(express.static("public"))
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true}))
app.use(express.json)

// app.get('/', (req, res) => {
//  //   console.log("Response");
//     // res.download("server.js");
//     // res.status(500).send("Hello!!");

//     res.render('index', { text: "World"});
// });

const userRouter = require('./routes/users');

app.use("/users", userRouter);

function logger(req, res, next){
    console.log(req.originalUrl);
    next()
}

app.listen(3000)

