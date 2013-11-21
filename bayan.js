$(document).ready(function() {

  $(".pane").click(function() {
    $('.pane').removeClass('open');
    $(this).addClass('open');

    var count = parseInt( $(this).find('.counter').text() );
    $(this).find('.counter').text(count + 1);
  });

});
