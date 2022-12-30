/*global $*/
$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000ff',
      'height': '100px',
      'width': '200px'
    });
    $('.box1').slideUp();
  });
});