const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/data', (req, res) => {
    res.send('Data route');
});

app.post('/data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Data received successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});