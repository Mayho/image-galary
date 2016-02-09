angular.module('app.main', [])

.config(function($stateProvider) {
  $stateProvider
  .state('app.main', {
    url: '/main',
    templateUrl: 'main/main.tpl.html',
    controller: 'MainCtrl'
  });
})

.controller('MainCtrl', function() {
  console.log('laksjdkfajlsd');
});
