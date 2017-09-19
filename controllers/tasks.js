var Task = require('../models/Task')

function index(request, response) {
    let tasks = Task.all()

    response.format({
        json: function () {
            return response.json(tasks)
        },
        html: function () {
            return response.render('home', { tasks: tasks.data })
        }
    })
}

function store(request, response) {
    Task.save({
        title: request.body.title,
        status: 0,
        created_at: new Date()
    })
    response.redirect('/')
}

function update(request, response) {
    var id = request.params.id
    var task = request.body

    var tasks = Task.update(id, task);
    response.send(tasks);
}

function destroy(request, response) {
    var tasks = Task.remove(request.params.id)
    response.send(tasks);
}

module.exports = { index, store, update, destroy }
