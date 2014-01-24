class FormBuilder
  constructor: (@element) ->

  start: (element) ->
    console.log "start #{@element[0].className}"

    formBuilder = this

    @element.find('.buttons .button').click ->
      button = $(this)
      formBuilder.buttonClicked(button)

    @element.find('.fields .close').click ->
      el = $(this)
      formBuilder.closeClicked(el)

  buttonClicked: (button) ->
    unless button.hasClass 'on'
      button.addClass 'on'

      fieldName = button.data 'field'
      field = @_getFieldByName(fieldName).detach()

      @element.find(".fields").append(field)
      field.addClass 'on'

  closeClicked: (el) ->
    field = $(el).parent()
    fieldName = field.data("field")
    button = @_getButtonByName(fieldName)
    field.removeClass "on"
    button.removeClass "on"

  _getFieldByName: (fieldName) ->
    field = @element.find(".fields .field[data-field=\"" + fieldName + "\"]")
    field

  _getButtonByName: (fieldName) ->
    @element.find ".buttons .button[data-field=\"" + fieldName + "\"]"

window.FormBuilder = FormBuilder
