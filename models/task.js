var tasks = {
    data: [
        { _id: 1, title: 'Tarefa', status: 0, created_at: new Date() },
        { _id: 2, title: 'Tarefa', status: 0, created_at: new Date() }
    ]
}

function all() {
    return tasks
}

function save(object) {
    object._id = tasks.data[tasks.data.length - 1]._id + 1
    tasks.data.push(object)
}

module.exports = {all, save}