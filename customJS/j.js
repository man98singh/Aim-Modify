
$(document).ready(function(){
    $('#slidorion').slidorion({

    });
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop:0},800);
      return false;
    });
});
