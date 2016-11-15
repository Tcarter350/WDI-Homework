angular.module('cakeApp')
  .factory('Cake', Cake);

Cake.$inject = ['$resource'];
function Cake($resource) {
  return new $resource('/cakes/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
