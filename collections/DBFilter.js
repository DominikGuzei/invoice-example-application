Meteor.methods({
  getFilter: function(date, days) {
    var start = getDateDayCeiling(date);
    if (days > 0) {
      var stop = getDateDayCeiling(date, days);
      filter = {
        createdAt: {
          $gte: stop,
          $lt: start
        }
      };
      return filter;
    } else {
      return {};
    }
  }
});

let getDateDayCeiling = function(date, offset=0) {
  var d = new Date(date);
  d.setDate(d.getDate() + 1 - offset);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}
