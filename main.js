$('button').on('click',checking);

function checking()
{
    var city = $("#city").val();
    $.ajax({
        type: 'GET',
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=Your Api",
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $("#temp").html(data.main.temp+"<sup>o</sup> C");
            $(".icon").attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        }
    });
}
