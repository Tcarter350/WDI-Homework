angular.module('cakeApp')
  .controller('CakesIndexController', CakesIndexController)
  .controller('CakesNewController', CakesNewController)
  .controller('CakesShowController', CakesShowController)
  .controller('CakesEditController', CakesEditController);

CakesIndexController.$inject = ['Cake'];
function CakesIndexController(Cake) {
  const cakesIndex = this;

  cakesIndex.all = Cake.query();
}

CakesNewController.$inject = ['Cake', '$state'];
function CakesNewController(Cake, $state) {
  const cakesNew = this;

  cakesNew.cake = {};

  function create() {
    Cake.save(cakesNew.cake, () => {
      $state.go('cakesIndex');
    });
  }

  cakesNew.create = create;
}

CakesShowController.$inject = ['Cake', '$state'];
function CakesShowController(Cake, $state) {
  const cakesShow = this;

  cakesShow.cake = Cake.get($state.params);

  function deleteCake() {
    cakesShow.cake.$remove(() => {
      $state.go('cakesIndex');
    });
  }

  cakesShow.delete = deleteCake;
}

CakesEditController.$inject = ['Cake', '$state'];
function CakesEditController(Cake, $state) {
  const cakesEdit = this;

  cakesEdit.cake = Cake.get($state.params);

  function update() {
    cakesEdit.cake.$update(() => {
      $state.go('cakesShow', $state.params);
    });
  }

  this.update = update;


};
