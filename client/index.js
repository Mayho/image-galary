angular.module('app', [
  'ngMaterial',
  'ui.router',
  'app.main'
])

.config(function($stateProvider, $httpProvider) {
  $stateProvider
  .state('app', {
    url:'',
    abstract: true,
    template: '<div ui-view></div>',
  });

  // Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  // Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

.run(function($state) {
  $state.go('app.main');
});
