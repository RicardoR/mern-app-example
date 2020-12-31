const {Router} = require('express');
const route = Router();
const TestController = require('../controllers/test.controller');

route.get('/', TestController.get);
route.post('/', TestController.create);
route.put('/', TestController.update);
route.delete('/', TestController.delete);

module.exports=route;