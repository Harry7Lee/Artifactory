var slider = document.getElementsByClassName("slider");
var banners = document.getElementsByClassName("banner");
var controlDots = document.getElementsByClassName("control-dot");
var currentBanner = 0;
var timer = null;
var mouseOn = false;

window.onload = function() {
  controlDots[0].className = "control-dot on";
  banners[0].style.display = "flex";
  switchBanner();
};

function switchBanner(index) {
  if (!mouseOn) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      switchBanner(currentBanner + 1);
    }, 5000);
    // timer = setTimeout("switchBanner(currentBanner + 1)", 1000);
    if (index < banners.length && index >= 0) {
      // slideAnimate(true, currentBanner);
      banners[index].style.display = "flex";
      controlDots[index].className = "control-dot on";
      for (var i = 0; i < banners.length; i++) {
        if (i != index) {
          banners[i].style.display = "none";
          controlDots[i].className = "control-dot";
        }
      }
      currentBanner = index;
    } else {
      switchBanner(0);
      currentBanner = 0;
    }
  }
}

function mouseOver() {
  mouseOn = true;
}
function mouseOut() {
  mouseOn = false;
  timer = null;
  switchBanner(currentBanner + 1);
}

// function slideAnimate(left, currentBanner) {
//   if (left) {
//     var banner = banners[currentBanner];
//     var pos = 0;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         banner.style.left = pos + "px";
//       }
//     }
//   }
// }

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").className = "navbar navbar-shrink";
    document.getElementById("logo-navbar").style.display = "flex";
    document.getElementById("logo").style.display = "none";
    document.getElementById("socialmedia").className =
      "socialmedia socialmedia-shrink";
    document.getElementById("login").className = "login login-shrink";
  } else {
    document.getElementById("navbar").className = "navbar";
    document.getElementById("logo").style.display = "flex";
    document.getElementById("logo-navbar").style.display = "none";
    document.getElementById("socialmedia").className = "socialmedia";
    document.getElementById("login").className = "login";
  }
}
