goTo = function(timeFrame) {
  FlowRouter.go('/:timeFrame', {timeFrame: timeFrame}, FlowRouter.current().queryParams);
}

let invoiceSubscription = null;

let timeFrames = {};
timeFrames['today'] = 1;
timeFrames['oneWeek'] = 7;
timeFrames['oneMonth'] = 31;
timeFrames['all'] = -1;

let redirect = function(timeFrame, go) {
  if (invoiceSubscription != null) invoiceSubscription.stop();
  invoiceSubscription = Meteor.subscribe('invoices', getToday(), timeFrames[timeFrame]);
  if (go) FlowRouter.go(FlowRouter.path('/:timeFrame', {'timeFrame': timeFrame}, FlowRouter.current().queryParams));
}

let getToday = function() {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

sortState = {
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

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('Home');
  }
});

FlowRouter.route('/:timeFrame', {
  name: 'timeFrame',
  action(params, queryParams) {
  	redirect(params['timeFrame'], false);
    BlazeLayout.render('Home', params);
  }
});
