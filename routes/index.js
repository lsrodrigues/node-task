var tasks = require('../controllers/tasks')
module.exports = function (app) {
    app.get('/', tasks.index)
    app.post('/', tasks.store)
}