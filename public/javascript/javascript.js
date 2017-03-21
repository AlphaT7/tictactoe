/* -- Right Content Menu Push -- */

var flag = 0;

$('#handlebar').click(function() {

   if (flag == 0) {

      $('html, body').animate({
         left: (($('#setup_wrapper').width() * -1)+80)+'px'
         //left: "-320px"
      }, 200);

      flag = 1;

   } else {
      $('html, body').animate({
         left: "0"
      }, 200);

      flag = 0;
   }

   setTimeout(function(){ $('#handlebar i').toggleClass('fa-angle-double-right')}, 200 );

});

/* Then push them back */
/*
$('#chat_title').click(function() {
   $('body').animate({
      left: "0px"
   }, 200);
   $('#sms').removeClass('blink');
});
*/
