FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('Home');
  }
});

FlowRouter.route('/:timeFrame', {
  name: 'timeFrame',
  action(params, queryParams) {
    BlazeLayout.render('Home');
  }
});