describe "Form builder", ->
  describe "buttons", ->
    describe "click", ->
      it "adds 'on' class", ->
        # add builder html to page
        # $('#fixture').load('form_builder_fixture.html')
        $('#fixture').html(fixture_html)

        # fb = new FB(el)
        formBuilderElement = $('#fixture .builder.friends')
        formBuilder = new FormBuilder(formBuilderElement)
        formBuilder.start()

        # click on 'name' button
        button = formBuilderElement.find ".buttons .button[data-field='name']"
        button.click()

        # ckeck class on 'name' button
        expect( button.hasClass('on') ).to.be.true


fixture_html = """
<div class="builder friends">
  <div class="buttons">
    <div class="button" data-field="name">
      name
    </div>
    <div class="button on" data-field="age">
      age
    </div>
    <div class="button" data-field="gender">
      gender
    </div>
  </div>
  <div class="fields">
    <div class="name field" data-field="name">
      user name
      <div class="close">
        &times;
      </div>
    </div>
    <div class="vozrast field on" data-field="age">
      user age
      <div class="close">
        &times;
      </div>
    </div>
    <div class="gender field" data-field="gender">
      user gender
      <div class="close">
        &times;
      </div>
    </div>
  </div>
</div>
"""
