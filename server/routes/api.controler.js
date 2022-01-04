const service = require('../service/api.service');

module.exports = (app) => {
    app.get('/list', service.getAllItems);
    app.get('/item/:id', service.getOneItem);
    app.post('/newCustomer', service.signUp);
    app.get('/logIn/:email/:password', service.logIn);
    app.post('/checkout', service.checkout);
}
/*

const express = require('express')
const router = express.Router()
const service =require("../service/api.service");

//mvc=modle view control
    router("/list").get(service.getAllItems);
    router("/item/:id").get(service.getOneItem);
module.exports = router;*/




/*
// REQUIRE CONTROLLER
const ArticlesController = require('../service/api.service');
const router=require("express").Router();
//module.exports = (app) => {
    router.get('/list', ArticlesController.getAllItems);
    router.get('/item/:id', ArticlesController.getOneItem);
    module.exports=router
//}
/*
//import service from "../service/api.service"
const express = require('express')
const router = express.Router()
const service =require("../service/api.service");

//mvc=modle view control
    router("/list").get(service.getAllItems);
    router("/item/:id").get(service.getOneItem);
module.exports = router;
 */