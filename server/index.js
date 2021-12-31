const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded);

app.get('/', () => {
    resizeBy.send('hello everyone')
})

app.listen(PORT, () => console.log(`server is running on ${PORT}`))