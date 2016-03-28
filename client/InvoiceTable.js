let sortState = {
  get: function (queryParam, database) {
    if (database === true) {
      return (FlowRouter.getQueryParam(queryParam) || 'Asc') == 'Asc' ? 1 : -1;
    }
    else {
      return (FlowRouter.getQueryParam(queryParam) || 'Asc') == 'Asc' ? 'Desc' : 'Asc';
    }
  },
  toggle: function (queryParam) {
    let direction = {};
    direction[queryParam] = (FlowRouter.getQueryParam(queryParam) || 'Asc') == 'Asc' ? 'Desc' : 'Asc';
    FlowRouter.setQueryParams(direction);
  }
};

Template.InvoiceTable.helpers({
  invoices: function () {
    return InvoiceTicketsCollection.find({}, {
      sort: {
        createdAt: sortState.get('sortCreatedAt', true),
        total: sortState.get('sortTotal', true)
      }
    });
  },
  createdAtButtonText: function () {
    return sortState.get('sortCreatedAt');
    //return (FlowRouter.getQueryParam('sortCreatedAt') || 'Asc') == 'Asc' ? 'Desc' : 'Asc';
  },
  totalButtonText: function () {
    return sortState.get('sortTotal');
    //return (FlowRouter.getQueryParam('sortTotal') || 'Asc') == 'Asc' ? 'Desc' : 'Asc';
  }
});

Template.InvoiceTable.events({
  "click #createdAt": function (event) {
    sortState.toggle('sortCreatedAt');
    //FlowRouter.setQueryParams({'sortCreatedAt': (FlowRouter.getQueryParam('sortCreatedAt') || 'Asc') == 'Asc' ? 'Desc' : 'Asc'});
  },
  "click #total": function (event) {
    sortState.toggle('sortTotal');
    //FlowRouter.setQueryParams({'sortTotal': (FlowRouter.getQueryParam('sortTotal') || 'Asc') == 'Asc' ? 'Desc' : 'Asc'});
  }
});

