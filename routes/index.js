var tasks = require('../controllers/tasks')
var methodOverride = require('method-override');
module.exports = function (app) {
    app.get('/', tasks.index)
    app.post('/', tasks.store)
    app.use(methodOverride('_method'));
    app.put('/task/:id',  tasks.update)
    app.delete('/task/:id', tasks.destroy)
    app.get('/create', tasks.create)
    app.get('/edit/:id', tasks.edit)
}