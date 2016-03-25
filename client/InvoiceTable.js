Template.InvoiceTable.helpers({
  invoices: function () {
    return InvoiceTicketsCollection.find({});
  }
});