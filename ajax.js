document.addEventListener("DOMContentLoaded", function() {

  const requestButton = document.getElementById("requestRoot");
  const pingpong = document.getElementById("request-to-ping-pong");
  const result3 = document.getElementById("result3");
  const countRequest = document.getElementById("countRequest");
  const result7 = document.getElementById("result7");
  const timeRequest = document.getElementById("timeRequest");
  const result8 = document.getElementById("result8");
  const carRequest = document.getElementById("carRequest");
  const result9 = document.getElementById("result9");
  let timeField = document.getElementById("timeField");



  requestButton.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/',
      method: 'GET',
      responseType: 'text'
    })
  })

  pingpong.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/ping',
      method: 'GET',
      responseType: 'text'
    })
      .then(function (response) {
        console.log(response.data);
        result3.innerHTML = response.data;
      }).catch(function (error) {
        console.log(error);
        result3.innerHTML = error + ".  We'll try harder next time.";
      }).then(function (response) {
        console.log("Request finished.")
    })
  });

  countRequest.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/count',
      method: 'GET',
      responseType: 'text'
    })
    .then(function (response) {
      console.log(response.data);
      result7.innerHTML = response.data;
    }).catch(function (error) {
      console.log(error);
      result7.innerHTML = error + ".  We'll try harder next time.";
    }).then(function (response) {
      console.log("Request finished.")
  })
});

  timeRequest.addEventListener('click', function() {
    let TZvalue = timeField.value;
    axios({
      url: `http://intro-ajax-api.herokuapp.com/time?timezone=${TZvalue}`,
      method: 'GET',
      responseType: 'text'
    })
    .then(function (response) {
      console.log(response.data);
      result8.innerHTML = response.data;
    }).catch(function (error) {
      console.log(error);
      result8.innerHTML = error + ".  We'll try harder next time.";
    }).then(function (response) {
      console.log("Request finished.")
    })
  });

  carRequest.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      responseType: 'html'
    })
    .then(function (response) {
      console.log(response.data);
      result9.innerHTML = response.data;
    }).catch(function (error) {
      console.log(error);
      result9.innerHTML = error + ".  We'll try harder next time.";
    }).then(function (response) {
      console.log("Request finished.")
    })
  });

})

