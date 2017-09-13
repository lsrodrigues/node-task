function index (request, response) {
    response.json({
        data: [
            {_id: 1, title: 'Titulo da tarefa', status: 0, created_at: new Date()},
            {_id: 2, title: 'Titulo da tarefa', status: 0, created_at: new Date()}
        ]
    })
}

module.exports = {index}