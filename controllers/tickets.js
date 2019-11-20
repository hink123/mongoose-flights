var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    let id = req.params.id;
    res.render('tickets/new', {id});
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err) {
        res.redirect(`/flights/${req.body.flight}`)
    });
}