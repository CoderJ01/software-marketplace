const express = require('express');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors()); // relax security applied to an API
app.use('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));