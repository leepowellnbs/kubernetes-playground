const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
  res.send(`Hello World! ${process.env.MY_POD_IP}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
