$(document).ready(function(){

  function loadBoard() {
    $.getJSON('/events.json', function(data){
      $('#releases').html('');
      $.each(data, function(i,release){
        var $instance = $('<li></li>');
        $('<span class="app"></span>').text(release.app).appendTo($instance);

        var start_at = new Date(release.start);
        var end_at = new Date(release.end);
        var now = new Date();
        var half_hour = new Date(now.getTime() + 30*60000);

        $('<span class="time"></span>').text(prettyTime(start_at) + " → "+ prettyTime(end_at)).appendTo($instance);

        if ((start_at < now) && (end_at > now)) {
          $instance.addClass('now');
          $('<span class="status"></span>').text("Deploy in process").appendTo($instance);
        } else if (start_at < half_hour) {
          $('<span class="status"></span>').text("Go to gate").appendTo($instance);
        } else {
          $('<span class="status"></span>').appendTo($instance);
        }

        $instance.appendTo('#releases');
      });
    }).fail(function(){
      $('#releases li').removeClass('now').addClass('fail').find('.status').text("Delayed");
    });
  }

  function prettyTime(datetime) {
    function pad(n){return n<10 ? '0'+n : n}

    return "" + pad(datetime.getHours()) +":"+ pad(datetime.getMinutes());
  }

  setInterval(loadBoard, 30000);
  loadBoard();

});
