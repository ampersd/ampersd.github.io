/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

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

// if hide without timeout - image doesn't have time to draw
setTimeout(function(){
  document.getElementsByClassName('particles-js-canvas-el')[0].style.display = 'none'; 
  document.getElementById('particles-js').style.backgroundColor = "#ffffff"; 
},
100);
// #32a6d7;

function showMagic()
{
  if (document.getElementById("switcher").checked) 
  {
    document.getElementsByClassName('particles-js-canvas-el')[0].style.display = 'block'; 
    document.getElementById('particles-js').style.backgroundColor = "#32a6d7"; 
  } else {
    document.getElementsByClassName('particles-js-canvas-el')[0].style.display = 'none'; 
    document.getElementById('particles-js').style.backgroundColor = "#ffffff"; 
  }
}