Session.setDefault('invoiceNumber', 1); // Bad practice to use a contuious range from a security perspective

createTickets = function(startDate, days, numberOfTickets) {
  for (var i = 0; i < numberOfTickets; i++) {
    var createdAt = new Date(startDate);
    createdAt.setDate(createdAt.getDate() - Math.floor(Math.random() * days));
    var total = Math.floor(Math.random() * 20) * 10;
    var invoiceNumber = Session.get('invoiceNumber');
    Session.set('invoiceNumber', Session.get('invoiceNumber') + 1);
    InvoiceTicketsCollection.insert({"invoiceNumber": invoiceNumber, "total": total, "createdAt": createdAt});
  }
}
createTicketsForFirstWeek = function() {
  createTickets(new Date(), 7, 50);
}
createTicketsForFirstMonth = function() {
  createTicketsForFirstWeek();
  createTickets(new Date(new Date() + 7), 23, 150); // Not exact but good enough
}
createTicketsForFirstTwoMonths = function() {
  createTicketsForFirstMonth();
  createTickets(new Date(new Date() + 30), 31, 150); // Not exact but good enough
}

Template.DatabaseSetup.events({
  'click #generate': function () {
  	// Insert an empty ticket to the collection, and creates the collection if it doesn't exists.
    //InvoiceTicketsCollection.insert({});
    createTicketsForFirstTwoMonths();
  }
});
