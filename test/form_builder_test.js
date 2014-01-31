(function() {
  var fixture_html;

  describe("Form builder", function() {
    return describe("buttons", function() {
      return describe("click", function() {
        return it("adds 'on' class", function() {
          var button, formBuilder, formBuilderElement;
          $('#fixture').html(fixture_html);
          formBuilderElement = $('#fixture .builder.friends');
          formBuilder = new FormBuilder(formBuilderElement);
          formBuilder.start();
          button = formBuilderElement.find(".buttons .button[data-field='name']");
          button.click();
          return expect(button.hasClass('on')).to.be["true"];
        });
      });
    });
  });

  fixture_html = "<div class=\"builder friends\">\n  <div class=\"buttons\">\n    <div class=\"button\" data-field=\"name\">\n      name\n    </div>\n    <div class=\"button on\" data-field=\"age\">\n      age\n    </div>\n    <div class=\"button\" data-field=\"gender\">\n      gender\n    </div>\n  </div>\n  <div class=\"fields\">\n    <div class=\"name field\" data-field=\"name\">\n      user name\n      <div class=\"close\">\n        &times;\n      </div>\n    </div>\n    <div class=\"vozrast field on\" data-field=\"age\">\n      user age\n      <div class=\"close\">\n        &times;\n      </div>\n    </div>\n    <div class=\"gender field\" data-field=\"gender\">\n      user gender\n      <div class=\"close\">\n        &times;\n      </div>\n    </div>\n  </div>\n</div>";

}).call(this);
