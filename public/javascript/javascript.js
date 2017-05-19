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

function isEven(n) { return n % 2 == 0; }

$('.tttcell').height($('.tttcell').width());
/*
$('#createuser_wrapper').submit(function(e) {
   e.preventDefault();
   if ($('#username').val() != '') {
      $.ajax({
            method: 'GET',
            url: '/userid',
            data: {
               name: $('#username').val()
            }
         })
         .done(function(data) {
            if(data == 'success'){
               username = $('#username').val();
               alert('Your username is: ' + username);
               $('#createuser_wrapper').css('display', 'none');
               $('#uid_info').html('User Name: ' + username);
            } else {
               alert(data);
            }
         });
   }
});
*/
$('#createuser_wrapper').submit(function(e) {
   e.preventDefault();
   if ($('#username').val() != '') {
      socket.emit('createuser', $('#username').val());
   }
});

$('#creategame_wrapper').submit(function(e) {
   e.preventDefault();
   if ($('#gamename').val() != '' && username != '') {
      if($('#gname_info').html() != ''){
         var r = confirm("Are you sure you wish to leave your existing game: " + gameroom);
         if(r){
            socket.emit('creategame', {'gamename': $('#gamename').val(), 'oldgamename':gameroom, 'username': username});
            $('#gname_info').html('Game Name: ' + $('#gamename').val() + ' ');
            playerturn = 1;
         }
      } else {
         socket.emit('creategame', {'gamename': $('#gamename').val(), 'username': username});
         $('#gname_info').html('Game Name: ' + $('#gamename').val() + ' ');
         playerturn = 1;         
      }
   }
});

$('#joingame_wrapper').submit(function(e) {
   e.preventDefault();
   if ($('#gamelist').val() != 'default' && username != '') {
      if($('#gname_info').html() != ''){
      var r = confirm("Are you sure you wish to leave your existing game: " + gameroom);
         if(r){
            socket.emit('joingame', {'gamename': $('#gamelist').val(), 'oldgamename':gameroom, 'username': username});
            playerturn = 2;            
         }
      } else {
         socket.emit('joingame', {'gamename': $('#gamelist').val(), 'username': username});
         playerturn = 2;
      }
   }
});

$('.tttcell').click(function() {
    var cid = this.id;
    socket.emit('cellclick', {'gameroom': gameroom, 'cellid': cid, 'playerturn': playerturn});
});