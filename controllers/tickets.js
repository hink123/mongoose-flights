var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create, 
    delete: deleteTicket
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

function deleteTicket(req, res) {
    var flightId;
    Ticket.findById(req.params.id, function(err, ticket) {
        flightId = ticket.flight;
    });
    Ticket.deleteOne({_id: req.params.id}, function(err) {
        res.redirect(`/flights/${flightId}`);
  })
}