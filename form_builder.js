(function() {
  var FormBuilder;

  FormBuilder = (function() {
    function FormBuilder(element) {
      this.element = element;
    }

    FormBuilder.prototype.start = function(element) {
      var formBuilder;
      console.log("start " + this.element[0].className);
      formBuilder = this;
      this.element.find('.buttons .button').click(function() {
        var button;
        button = $(this);
        return formBuilder.buttonClicked(button);
      });
      return this.element.find('.fields .close').click(function() {
        var el;
        el = $(this);
        return formBuilder.closeClicked(el);
      });
    };

    FormBuilder.prototype.buttonClicked = function(button) {
      var field, fieldName;
      button.addClass('on');
      fieldName = button.data('field');
      field = this._getFieldByName(fieldName);
      return field.addClass('on');
    };

    FormBuilder.prototype.closeClicked = function(el) {
      var button, field, fieldName;
      field = $(el).parent();
      fieldName = field.data("field");
      button = this._getButtonByName(fieldName);
      field.removeClass("on");
      return button.removeClass("on");
    };

    FormBuilder.prototype._getFieldByName = function(fieldName) {
      var field;
      field = this.element.find(".fields .field[data-field=\"" + fieldName + "\"]");
      return field;
    };

    FormBuilder.prototype._getButtonByName = function(fieldName) {
      return this.element.find(".buttons .button[data-field=\"" + fieldName + "\"]");
    };

    return FormBuilder;

  })();

  window.FormBuilder = FormBuilder;

}).call(this);
