const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// const mongoose = require('mongoose');

const connect = require("./schemas");
connect();

const postRouter = require("./routers/post");
app.use("/api", [postRouter]);

// app.get('/mongodb', async (req, res) => {
//     await mongoose.connect('mongodb://localhost/homework', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: true,
//         useCreateIndex: true
//     });

//     const { Schema } = mongoose;
//     const postSchema = new Schema({
//         title: {
//             type: String,
//             required: true,
//         },
//         name: {
//             type: String,
//             required: true,
//         },
//         password: {
//             type: Number,
//             required: true,
//         },
//         content: {
//             type: String,
//             required: true,
//         },
//         date: {
//             type: Date,
//             dafault: Date.now,
//         }
//     });

//     let post = mongoose.model("posts", postSchema)

// 		await post.create({
//         title: "일기",
//         name: "김인섭",
//         password: 1234,
//         content: "참 좋은 하루였다",
//     });

// 		res.send('ok');
// })

app.get('/main', (req, res) => {
let name = req.query.name;
res.render('main', {name});
})

app.get('/write', (req, res) => {
let name = req.query.name;
res.render('write', {name});
})

app.get('/detail', (req, res) => {
let name = req.query.name;
res.render('detail', {name});
})

app.get('/edit', (req, res) => {
let name = req.query.name;
res.render('edit', {name});
})

app.get('/test', (req, res) => {
let name = req.query.name;
res.render('test', {name});
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})