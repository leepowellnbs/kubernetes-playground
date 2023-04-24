const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
  res.send(`
    <div>NODE NAME: ${process.env.MY_NODE_NAME}</div>
    <div>POD NAME: ${process.env.MY_POD_NAME}</div>
    <div>POD NAMESPACE: ${process.env.MY_POD_NAMESPACE}</div>
    <div>POD IP: ${process.env.MY_POD_IP}</div>
    <div>POD SERVICE ACCOUNT: ${process.env.MY_POD_SERVICE_ACCOUNT}</div>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
