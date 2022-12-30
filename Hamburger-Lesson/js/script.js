$(function(){
  $('.menu-trigger').on('click', function(event){
    $(this).toggleClass('active');
    $('#sp-manu').fadeToggle();
    event.preventDefault();
  });
});