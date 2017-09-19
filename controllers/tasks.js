var Task = require('../models/Task')

function index (request, response) {
    response.json(Task.all())
}

function store (request, response) {
    Task.save({
        title: request.body.title,
        status: 0,
        created_at: new Date()
    })
    response.redirect('/all')
}

function update (request, response) {
    var id = request.params.id
    var task = request.body

    var tasks = Task.update(id, task);
    response.send(tasks);
}

function destroy (request, response) {
    var tasks = Task.remove(request.params.id)
    response.send(tasks);
}

module.exports = {index, store, update, destroy}
