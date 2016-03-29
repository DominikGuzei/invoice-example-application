Meteor.publish('invoices', function(date, days) {
  return InvoiceTicketsCollection.find(Meteor.call('getFilter', date, days));
});
