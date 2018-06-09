const express = require('express');
const os = require('os');

const app = express();
const port = process.env.PORT;
const env = process.env.NODE_ENV;
const hostname = os.hostname();

app.get('/', (req, res) => res.send(`Hello Example App in ${env} at ${hostname}!`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
