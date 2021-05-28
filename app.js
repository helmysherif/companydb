const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json())
app.use(cors());
app.use(require('./routes/home.routes'))
mongoose.connect("mongodb+srv://sherif:A199421ama@cluster0.p5ug5.mongodb.net/CompanyDB", {useNewUrlParser: true, useUnifiedTopology: true});
app.listen(process.env.PORT , () => {console.log(`app listen on port ${port}`)});
