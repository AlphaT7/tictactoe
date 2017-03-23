/* -- Right Content Menu Push -- */

var flag = 0;

$('#handlebar').click(function() {

   if (flag == 0) {

      $('html, body').animate({
         left: (($('#setup_wrapper').width() * -1) + 80) + 'px'
      }, 200);

      flag = 1;

   } else {
      $('html, body').animate({
         left: "0"
      }, 200);

      flag = 0;
   }

   setTimeout(function() {
      $('#handlebar i').toggleClass('glyphicon-chevron-right'),
      $('#handlebar').toggleClass('addneonblue')
   }, 200);

});

$('.tttcell').height($('.tttcell').width());

$("#createuser_wrapper").submit(function(e) {
   e.preventDefault();
   if ($('#username').val() != '') {
      $.ajax({
            method: "GET",
            url: "/userid",
            data: {
               name: $('#username').val()
            }
         })
         .done(function(data) {
            username = data;
            alert(data);
         });
   }
});

$("#creategame_wrapper").submit(function(e) {
   e.preventDefault();
   if ($('#gamename').val() != '' && username != '') {
      $.ajax({
            method: "GET",
            url: "/gamename",
            data: {
               name: $('#gamename').val()
            }
         })
         .done(function(room) {
            alert(room);
            gameroom = room;
            $('#gamelist').html($('#gamelist').html() + '<option id="' + gameroom + '"> ' + gameroom + ' </option>')
            console.log('You have joined: ' + gameroom);
            socket.emit('joinroom', gameroom);
         });
   }
});

$('#text_btn').click(function(){
   socket.emit('test',gameroom);
});
