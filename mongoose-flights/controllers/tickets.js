
const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
	new: newTicket,
	create,
	//addToTicket,
};

// function addToTicket(req, res) {
// 	Flight.findById(req.params.id, function (err, flight) {
// 		flight.flight.push(req.body.ticketId);
// 		flight.save(function (err) {
// 			res.redirect(`/flights/${flight._id}`);
// 		});
// 	});
// }

// function newTicket(req, res) {
// 	Ticket.find({}, function (err, tickets) {
// 		res.render('tickets/new', {
// 			title: 'Add Tickets',
// 			tickets,
// 		});
// 	});
// }

function newTicket(req, res) {
    const flightId = req.params.id
    res.render('tickets/new', { title: "New Ticket" , flightId })
}

// function create(req, res) {
// 	Ticket.create(req.body, function (err, ticket) {
// 		res.redirect('/tickets/new');
// 	});
// }

function create(req, res) {
    req.body.flight = req.params.id;
    console.log(req.params)
    console.log(req.body)
    Ticket.create(req.body, function(err, ticket) {
        if (err) console.log(err)
        res.redirect(`/flights/${req.params.id}`)
    })
}