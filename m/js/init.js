$(document).ready(function() {
  
   $( "div.insertmyheader" ).html('');
	 $( "div.insertmyfooter" ).html('<p class="grey-text text-lighten-4">No recent updates. Keep watch on this area for future notifications.</p>');

    
});

/*$(window).load(function() { 
	$("#spinner").fadeOut("slow"); 

});*/

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-59192681-1', 'auto');
  ga('send', 'pageview');

(function($){

  $(function(){

    $(".button-collapse").sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space