Template.DatabaseSetup.events({
  'click button': function () {
  	// Insert an empty ticket to the collection, and creates the collection if it doesn't exists.
    InvoiceTicketsCollection.insert({});
  }
});