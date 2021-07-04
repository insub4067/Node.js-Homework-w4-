const mongoose = require("mongoose");

const connect = () => {
  mongoose
    // .connect("mongodb://test:test@3.35.48.255:27017", {
    .connect("mongodb://localhost:27017/homework", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      ignoreUndefined: true
    })
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;