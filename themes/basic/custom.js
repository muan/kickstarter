WebFontConfig = {
  google: { families: [ 'Open Sans:400,800', 'Noticia Text' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);

})();

$(document).ready(function() {
  
  $("#share").click(function() {
    var sharer = "https://www.facebook.com/sharer/sharer.php?u=";
    window.open(sharer + $(this).data("url"), 'sharer', 'width=626,height=436,top=200,left=200');
  });

  $("#tweet").click(function() {
    var sharer = "https://twitter.com/share?text=" + $(this).data("name") + " is now on Kickstarter!&via=" + $(this).data("via") + "&url=";
    window.open(sharer + $(this).data("url"), 'sharer', 'width=626,height=436,top=200,left=200');
  });

  $("#project").click(function() {
    window.open($(this).data("url"), 'sharer');
  });
  var h = $(".cover-splash").outerHeight()
  $(".cover-splash").css("height", h + "px")

})