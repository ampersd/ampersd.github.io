/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
var initiated = false;

function init() {
  particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": false,
                "value_area": 561.194221302933
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 4,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 8
            },
            "image": {
              "src": "assets/cloud.png",
              "width": 150,
              "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 112.2388442605866,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 19.489853095232284,
                "size_min": 4.060386061506725,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 0,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "left",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
  });
}

var usd = -1;
var eur = -1;

function getCurrencyRates() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", false)
  xhr.send();
  if (xhr.status != 200) {
    // обработать ошибку
    console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  } else {
    // вывести результат
    var response = JSON.parse(xhr.responseText);
    var rates = response.query.results.rate; 
    rates.forEach(function(val) {
      if (val.id == "USDRUB") usd = Number(val.Rate).toFixed(2);
      if (val.id == "EURRUB") eur = Number(val.Rate).toFixed(2);
    });
    if (usd >= 0 && eur >= 0) {
      var text = document.createTextNode("USD: " + usd + "   EUR: " + eur);
      var h2 = document.createElement("DIV");
      h2.appendChild(text);
      h2.setAttribute("class", "right");
      var elem = document.getElementById("main");
      elem.insertBefore(h2, elem.firstChild);
    }
  }
  console.log(usd);
  console.log(eur);
}

// getCurrencyRates();

function showMagic()
{
  if (document.getElementById("switcher").checked) 
  {
    if (!initiated) {
      init();
      initiated = true;
    }
    else {
      document.getElementsByClassName('particles-js-canvas-el')[0].style.display = 'block';    
    }
    document.getElementById('particles-js').style.backgroundColor = "#32a6d7";  
  } else if (initiated) {
    document.getElementsByClassName('particles-js-canvas-el')[0].style.display = 'none'; 
    document.getElementById('particles-js').style.backgroundColor = "#ffffff"; 
  }
}