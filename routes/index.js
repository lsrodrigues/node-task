var tasks = require('../controllers/tasks')
module.exports = function (app) {
    app.get('/all', tasks.index)
    app.post('/', tasks.store)
    app.put('/task/:id',  tasks.update)
}