$(document).ready(function(){

  function loadBoard() {
    $('#status').hide();

    $.getJSON('/events.json', function(data){
      $('#releases, #status').html('');
      $('#status').hide();

      if (data.length > 0) {
        $.each(data, function(i,release){
          var $instance = $('<li></li>');
          $('<span class="app"></span>').text(release.app).appendTo($instance);

          if (release.start == null || release.end == null) {
            return;
          }

          var start_at = moment(release.start).tz("Europe/London");
          var end_at = moment(release.end).tz("Europe/London");
          var half_hour = moment().add(30, 'm');
          var now = moment();

          var day_label = (start_at.isAfter(now, 'day')) ? start_at.format('ddd') + " " : "";
          var time_label = day_label + start_at.format("HH:mm") + " → "+ end_at.format("HH:mm");


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
      } else {
        $('#status').text("There are no more releases planned right now.").show();
      }
    }).fail(function(){
      $('#releases li').removeClass('now').addClass('fail').find('.status').text("Delayed");
    });
  }

  setInterval(loadBoard, 30000);
  loadBoard();

});
