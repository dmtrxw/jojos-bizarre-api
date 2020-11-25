const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const { Protagonist } = require('./models/');

app.use(cors());

app.get('/protagonists', async function (req, res, next) {
  try {
    const protagonists = await Protagonist.findAll({
      order: [['id', 'ASC']],
    });

    res.json(protagonists);
  } catch (e) {
    res.status(500).json({
      message: 'Shit happened',
    });
  }
});

app.listen(port, function () {
  console.log("Jojo's Bizarre API listening on port", port);
});
