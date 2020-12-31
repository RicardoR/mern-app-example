const TestController = {};
const Employee = require('../models/Employee');

TestController.get = (req, res) => {
    res.send('get works')
};

TestController.create = async(req, res) => {
    const {name, surname, salary} = req.body;

    const NewRegister = new Employee({
        name, 
        surname, 
        salary
    });

    await NewRegister.save()
    .then(() => {
        return res.status(201).json({
            success: true,
            message: 'Employee created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Employee not created!',
        })
    });
};


TestController.update = (req, res) => {
    res.send('update works')
};


TestController.delete = (req, res) => {
    res.send('delete works')
};


module.exports = TestController;