Meteor.publish('invoices', function(date, days) {
  var start = getDateDayCeiling(date);
  if (days > 0) {
    var stop = getDateDayCeiling(date, days);
    console.log(start);
    console.log(stop);
    return InvoiceTicketsCollection.find({
      createdAt: {
        $gte: stop,
        $lt: start
      }
    })
  } else {
    return InvoiceTicketsCollection.find({})
  }
});

getDateDayCeiling = function(date, offset=0) {
  var d = new Date(date);
  d.setDate(d.getDate() + 1 - offset);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}

getDateDayFlooring = function(date, offset=0) {
  var d = new Date(date);
  d.setDate(d.getDate() - offset);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}
