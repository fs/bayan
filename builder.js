var formBuilder = {
  start: function() {
    console.log('start');

    $('.builder .buttons .button').click(formBuilder.buttonClicked);
    $('.builder .fields .close').click(formBuilder.closeClicked);
  },

  buttonClicked: function() {
    var button = $(this);

    button.addClass('on');

    var fieldId = button.attr('data-field');

    $('.builder .fields #user_' + fieldId).addClass('on');
  },

  closeClicked: function() {
    var field = $(this).parent();
    var fieldId = field.attr('id').replace('user_', '');
    var button = $('.builder .buttons .button[data-field="'+fieldId+'"]');

    field.removeClass('on');
    button.removeClass('on');
  }
};
