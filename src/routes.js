const routes = require('express').Router();

routes.post('/estudante', (req, res) => {
    return res.json({ Hello:'World' })
});

module.exports = routes;