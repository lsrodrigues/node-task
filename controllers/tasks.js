var task = require('../models/task')

function index (request, response) {
    response.json(task.all())
}

function store (request, response) {
    task.save({
        title: request.body.title,
        status: 0,
        created_at: new Date()
    })
    response.redirect('/')
}

module.exports = {index, store}
