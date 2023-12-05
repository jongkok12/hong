const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', async (req, res) => {
  try {
    const response = await fetch('https://w3.angkanet.zone/wp-content/plugins/togelmania/datalive/sd.php?randval=0.5736255021202556&_=1701735379476');
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});