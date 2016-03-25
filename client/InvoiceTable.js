Session.setDefault('createdAtSorting', 1);
Session.setDefault('totalSorting', 1);
Session.setDefault('createdAtSortingText', 'Asc');
Session.setDefault('totalSortingText', 'Asc');

Template.InvoiceTable.helpers({
  invoices: function () {
    return InvoiceTicketsCollection.find({}, {
      sort: {
        createdAt: Session.get('createdAtSorting'),
        total: Session.get('totalSorting')
      }
    });
  },
  createdAtButtonText: function () {
  	return Session.get('createdAtSortingText');
  },
  totalButtonText: function () {
  	return Session.get('totalSortingText');
  }
});

Template.InvoiceTable.events({
  "click #createdAt": function (event) {
    Session.set('createdAtSorting', Session.get('createdAtSorting') * -1);
    Session.set('createdAtSortingText', Session.get('createdAtSorting') == 1 ? 'Asc' : 'Desc');
  },
  "click #total": function (event) {
    Session.set('totalSorting', Session.get('totalSorting') * -1);
    Session.set('totalSortingText', Session.get('totalSorting') == 1 ? 'Asc' : 'Desc');
  }
});