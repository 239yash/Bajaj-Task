const express = require('express');
const app = express();
const validationController = require('./controllers/validation')
app.use(express.json({ extended: false }));

app.post('/bfhl', validationController.validationLogic);
app.use('/', (req, res) => {
    res.send("Kindly, use /bfhl as an end-point and POST method");
})

app.listen(process.env.PORT || 8080);