$(document).ready(function() {
  var friends = $('.builder.friends');
  var formBuilderFriends = makeFormBuilderFor(friends);
  // TODO: var formBuilderFriends = new FormBuilder(friends);
  formBuilderFriends.start(friends);

  var collegues = $('.builder.collegues');
  var formBuilderCollegues = makeFormBuilderFor(collegues);
  formBuilderCollegues.start(collegues);
});
