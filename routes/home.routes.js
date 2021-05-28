const app = require('express').Router();
const HomeController = require('../controllers/home.controller');
app.get('/' , HomeController.displayAllDepartments)
app.get('/department/:id' , HomeController.displayDepartmentByID)
module.exports = app;