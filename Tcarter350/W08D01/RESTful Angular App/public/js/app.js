angular
  .module('cakeApp', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('cakesIndex', {
      url: '/cakes',
      templateUrl: '/templates/cakesIndex.html',
      controller: 'CakesIndexController as cakesIndex'
    })
    .state('cakesNew', {
      url: '/cakes/new',
      templateUrl: '/templates/cakesNew.html',
      controller: 'CakesNewController as cakesNew'
    })
    .state('cakesShow', {
      url: '/cakes/:id',
      templateUrl: '/templates/cakesShow.html',
      controller: 'CakesShowController as cakesShow'
    })
    .state('cakesEdit', {
      url: '/cakes/:id/edit',
      templateUrl: '/templates/cakesEdit.html',
      controller: 'CakesEditController as cakesEdit'
    })
    .state('register', {
    url: '/register',
    templateUrl: '/templates/register.html',
    controller: 'RegisterController as register'
    })
    .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'LoginController as login'
    });



  $urlRouterProvider.otherwise('/cakes');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
    $authProvider.loginUrl = '/login';
    $authProvider.signupUrl = '/register';

    $authProvider.tokenPrefix = '';
}
