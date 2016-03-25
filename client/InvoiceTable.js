Template.InvoiceTable.helpers({
  invoices: function () {
    return InvoiceTicketsCollection.find({}, {
      sort: {
        createdAt: 1,
        total: 1
      }
    });
  }
});