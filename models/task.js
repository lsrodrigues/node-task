var tasks = {
    data: [
        { _id: 1, title: 'Tarefa', status: 0, created_at: new Date() },
        { _id: 2, title: 'Tarefa', status: 0, created_at: new Date() }
    ]
}

function all() {
    return tasks
}

module.exports = {all}