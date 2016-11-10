console.log("JS loaded!");

$(function() {
    getSharks();
    $('form').on('submit', createShark);
});

const addShark = (shark) => {
  $('#sharks').prepend(`<li>${shark.species} - <em>${shark.maxlength}</em> - <em><img src="${shark.image}"></em></li>`);
};

const getSharks = () => {
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000/users"
  })
  .done((data) => {
    console.log(data);
    $.each(data, (index, shark) => {
      addShark(shark);
    });
  });
};

const createShark = (e) => {
  e.preventDefault();

  $.ajax({
    method: 'POST',
    url: "http://localhost:8000/users",
    data: $('form').serialize()
  }).done((data) => {
    addShark(data);
  });
};
