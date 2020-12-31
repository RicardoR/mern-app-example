const TestController = {};

TestController.get = (req, res) => {
    res.send('get works')
};


TestController.create = (req, res) => {
    res.send('create works')
};


TestController.update = (req, res) => {
    res.send('update works')
};


TestController.delete = (req, res) => {
    res.send('delete works')
};


module.exports = TestController;