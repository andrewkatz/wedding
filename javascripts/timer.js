$(function() {
  var fromNow = moment("20141213", "YYYYMMDD").diff(moment(), 'days');
  $('#timer').html(fromNow + ' days to go');
});
