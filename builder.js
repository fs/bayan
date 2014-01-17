function FormBuilder(element) {
  this.element = element;
}

FormBuilder.prototype.start = function(element) {
  console.log('start ' + this.element[0].className);

  var formBuilder = this;

  this.element.find('.buttons .button').click(function() {
    var button = $(this);
    formBuilder.buttonClicked(button);
  });

  this.element.find('.fields .close').click(function() {
    var el = $(this);
    formBuilder.closeClicked(el);
  });
}

FormBuilder.prototype.buttonClicked = function(button) {
  button.addClass('on');

  var fieldName = button.data('field');
  var field = this._getFieldByName(fieldName);

  field.addClass('on');
}

FormBuilder.prototype.closeClicked = function(el) {
  var field = $(el).parent();
  var fieldName = field.data('field');

  var button = this._getButtonByName(fieldName);

  field.removeClass('on');
  button.removeClass('on');
}

FormBuilder.prototype._getFieldByName = function(fieldName) {
  var field = this.element.find('.fields .field[data-field="'+fieldName+'"]');

  return field;
}

FormBuilder.prototype._getButtonByName = function(fieldName) {
  return this.element.find('.buttons .button[data-field="'+fieldName+'"]');
}
