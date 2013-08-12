$(document).ready(function(){

  function loadBoard() {
    $.getJSON('/events.json', function(data){
      $('#releases').html('');
      $.each(data, function(i,release){
        var $instance = $('<li></li>');
        $('<span class="app"></span>').text(release.app).appendTo($instance);

        var start_at = Date.parse(release.start);
        var end_at = Date.parse(release.end);
        var half_hour = Date.today().add(30).minutes();
        var now = Date.today().setTimeToNow();

        var day_label = (start_at.isAfter(now.at("11:59pm"))) ? start_at.toString('ddd') + " " : "";
        var time_label = day_label + start_at.toString("hh:mm") + " → "+ end_at.toString("hh:mm");


        $('<span class="time"></span>').text(time_label).appendTo($instance);

        if ((now.isAfter(start_at)) && (now.isBefore(end_at))) {
          $instance.addClass('now');
          $('<span class="status"></span>').text("Deploy in progress").appendTo($instance);
        } else if (start_at < half_hour) {
          $('<span class="status"></span>').text("Deploying soon").appendTo($instance);
        } else {
          $('<span class="status"></span>').appendTo($instance);
        }

        $instance.appendTo('#releases');
      });
    }).fail(function(){
      $('#releases li').removeClass('now').addClass('fail').find('.status').text("Delayed");
    });
  }

  setInterval(loadBoard, 30000);
  loadBoard();

});
