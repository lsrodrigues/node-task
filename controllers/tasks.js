var task = require('../models/task')

function index (request, response) {
    response.json(task.all())
}

module.exports = {index}
