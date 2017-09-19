var tasks = require('../controllers/tasks')
module.exports = function (app) {
    app.get('/', tasks.index)
    app.post('/', tasks.store)
    app.put('/task/:id',  tasks.update)
    app.delete('/task/:id', tasks.destroy)
}