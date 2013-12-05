function start() {
  console.log('start');

  $('.button').click(buttonClicked);
}

function buttonClicked() {
  var button = $(this);

  button.addClass('on');

  var fieldId = button.attr('data-field');

  $('#user_' + fieldId).addClass('on');
}

$(document).ready(start);
