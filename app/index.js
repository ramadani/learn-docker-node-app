const express = require('express');
const app = express();
const port = process.env.PORT;
const env = process.env.NODE_ENV;

app.get('/', (req, res) => res.send(`Hello Example App in ${env}!`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
