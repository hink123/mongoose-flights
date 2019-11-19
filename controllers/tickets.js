var Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    let id = req.params.id;
    res.render('tickets/new', {id});
}

function create(req, res) {
    console.log("Hey there: " + req.body);
    req.body.flight = req.body.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${ticket.flight}`)
    });
}