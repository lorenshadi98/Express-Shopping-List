const express = require('express');
const router = new express.Router();
const items = require('./fakeDb');

router.get('/', function (req, res) {
  return res.json(items);
});

router.post('/', function (req, res) {
  const name = req.body.name;
  const price = req.body.price;
  items.push({ name: name, price: price });
  return res.json({ added: { name: name, price: price } });
});

router.get('/:name', function (req, res) {
  const item = items.find((item) => item.name === req.params.name);

  if (!item) throw 'Not found!';

  return res.json(item);
});

router.patch('/:name', function (req, res) {
  const foundItem = items.find(
    (foundItem) => foundItem.name === req.params.name
  );

  if (!foundItem) throw 'Not found!';
  foundItem.name = req.body.name;
  foundItem.price = req.body.price;

  return res.json({ updated: foundItem });
});

router.delete('/:name', function (req, res) {
  const foundItem = items.find(
    (foundItem) => foundItem.name === req.params.name
  );
  if (!foundItem) throw 'Not found!';
  const index = items.indexOf(foundItem);
  if (index > -1) {
    items.splice(index, 1);
  }
  return res.json({ message: 'Deleted' });
});
module.exports = router;
