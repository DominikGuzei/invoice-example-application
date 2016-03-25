invoiceSubscription = null;

Template.FilterButtons.events({
  'click #today': function () {
  	console.log("Today");
    if (invoiceSubscription != null) invoiceSubscription.stop();
    invoiceSubscription = Meteor.subscribe('invoices', getToday(), 1);
  },
  'click #oneWeek': function () {
  	console.log("One week");
    if (invoiceSubscription != null) invoiceSubscription.stop();
    invoiceSubscription = Meteor.subscribe('invoices', getToday(), 7);
  },
  'click #oneMonth': function () {
  	console.log("One month");
    if (invoiceSubscription != null) invoiceSubscription.stop();
    invoiceSubscription = Meteor.subscribe('invoices', getToday(), 30);
  },
  'click #all': function () {
  	console.log("All");
    if (invoiceSubscription != null) invoiceSubscription.stop();
    invoiceSubscription = Meteor.subscribe('invoices', getToday(), -1);
  }
});

getToday = function() {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}
