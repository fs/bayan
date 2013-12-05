function start() {
  console.log('start');

  $('.builder .buttons .button').click(buttonClicked);
  $('.builder .fields .close').click(closeClicked);
}

function buttonClicked() {
  var button = $(this);

  button.addClass('on');

  var fieldId = button.attr('data-field');

  $('.builder .fields #user_' + fieldId).addClass('on');
}

function closeClicked() {
  var field = $(this).parent();
  var fieldId = field.attr('id').replace('user_', '');
  var button = $('.builder .buttons .button[data-field="'+fieldId+'"]');

  field.removeClass('on');
  button.removeClass('on');
}
