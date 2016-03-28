let invoiceSubscription = null;

let timeFrames = {};
timeFrames['today'] = 1;
timeFrames['oneWeek'] = 7;
timeFrames['oneMonth'] = 31;
timeFrames['all'] = -1;

Template.FilterButtons.onCreated(function() {
  var self = this;
  self.autorun(function() {
    redirect(FlowRouter.getParam('timeFrame'), false);
  });
});

Template.FilterButtons.events({
  'click .timeFrame': function (event) {
    redirect(event.currentTarget.id, true);
  }
});

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
