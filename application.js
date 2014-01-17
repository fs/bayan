$(document).ready(function() {
  var friends = $('.builder.friends');
  var formBuilderFriends = new FormBuilder(friends);
  formBuilderFriends.start(friends);

  var collegues = $('.builder.collegues');
  var formBuilderCollegues = new FormBuilder(collegues);
  formBuilderCollegues.start(collegues);
});
