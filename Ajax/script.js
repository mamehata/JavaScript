/*global $*/
// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "a1ab1d13e652ce335997e338aebcc7e2";

$(function(){
  $('#btn').on('click', function(event){
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $("#cityname").val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function(data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp-max').text(data.main.temp_max);
      // 最低気温
      $('#temp-min').text(data.main.temp_min);
      // 湿度
      $('#humidity').text(data.main.humidity);
      // 風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.main.weather);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function(data){
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});