var formBuilder = {
  start: function(element) {
    console.log('start ' + element[0].className);

    element.find('.buttons .button').click(function() {

      var button = $(this);
      formBuilder.buttonClicked(element, button);

    });

    element.find('.fields .close').click( formBuilder.closeClicked );
  },

  buttonClicked: function(element, button) {
    button.addClass('on');

    var fieldName = button.data('field');
    var field = formBuilder._getFieldByName(element, fieldName);

    field.addClass('on');
  },

  closeClicked: function() {
    var field = $(this).parent();
    var fieldName = field.data('field');

    var button = formBuilder._getButtonByName(fieldName);

    field.removeClass('on');
    button.removeClass('on');
  },

  _getFieldByName: function(element, fieldName) {
    var field = element.find('.fields .field[data-field="'+fieldName+'"]');

    return field;
  },

  _getButtonByName: function(fieldName) {
    return $('.builder .buttons .button[data-field="'+fieldName+'"]');
  }

};
