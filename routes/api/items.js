const express = require("express");
const router = express.Router();

const Item = require("../../models/item");

// @route GET api/items
// @desc Get all items

router.get("/", (req, res) => {
  Item.find().then(items => res.json(items));
});

// @route POST api/items
// @desc Create an Item

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route POST api/items/:id
// @desc Delete an Item

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
