'use strict';

console.log("JS loaded!");

$(function () {
  getSharks();
  $('form').on('submit', createShark);
});

var addShark = function addShark(shark) {
  $('#sharks').prepend('<li>' + shark.species + ' - <em>' + shark.maxlength + '</em> - <em><img src="' + shark.image + '"></em></li>');
};

var getSharks = function getSharks() {
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000/users"
  }).done(function (data) {
    console.log(data);
    $.each(data, function (index, shark) {
      addShark(shark);
    });
  });
};

var createShark = function createShark(e) {
  e.preventDefault();

  $.ajax({
    method: 'POST',
    url: "http://localhost:8000/users",
    data: $('form').serialize()
  }).done(function (data) {
    addShark(data);
  });
};