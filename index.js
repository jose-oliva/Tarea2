const express = require('express')
require("dotenv").config();
const PORT = process.env.PORT;


const app = express();

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});