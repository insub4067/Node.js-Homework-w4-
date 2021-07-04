const express = require("express");
const post = require("../schemas/post");

const router = express.Router();

router.get("/detail/:contentId", async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const result = await post.findOne({ contentId });
    res.render('detail', { result, contentId });
  } catch (err) {
    console.error(err);
    next(err);
  }

});

router.get("/edit/:contentId", async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const result = await post.findOne({ contentId });
    res.render('edit', { result });
  } catch (err) {
    console.error(err);
    next(err);
  }

});



router.get("/posts", async (req, res, next) => {
  try {
    // const { category } = req.query;
    const result = await post.find().sort('-contentId');
    res.json({result});
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/posts", async (req, res, next) => {
  try {
    const { contentId, title, name, password, content } = req.body;
    await post.create({ contentId, title, name, password, content });
    res.send({ result: "success" });
  } catch (err) {
    console.error(err);
    next(err);
  }

});

router.post("/edit", async (req, res, next) => {
  try {
    const { contentId, title, name, password, content } = req.body;
    const user = await post.findOne({contentId})
      await post.updateOne({ contentId : contentId }, { $set: { title: title, name: name, content: content } });
      res.send({ result: "success" });
  } catch (err) {
    console.error(err);
    next(err);
  }

});

router.delete("/delete", async (req, res, next) => {
  try {
    const { contentId, password } = req.body;
    await post.deleteOne({ 'contentId': contentId, 'password': password });
    res.send({ result: "success" });
  } catch (err) {
    console.error(err);
    next(err);
  }



});

module.exports = router;