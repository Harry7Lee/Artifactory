// 1. Banner switch after 3s automatically
// 2. Bnnner timeout stop if mouse hover
// 3. Click banner go to detai page
// 4. click one dot can go to corresponding banner
// 5. click back/forward can go to last/next banner
// 6. if on last banner, click can go to the first banner again

var slider = document.getElementsByClassName("slider");
var banners = document.getElementsByClassName("banner");
var controlDots = document.getElementsByClassName("control-dot");
var currentBanner = 0;
var time = null;

window.onload = function() {
  controlDots[0].className = "control-dot on";
  banners[0].style.display = "flex";
  autoPlay();
};

function switchBanner(index) {
  clearInterval(timer);
  if (index < banners.length && index >= 0) {
    banners[index].style.display = "flex";
    controlDots[index].className = "control-dot on";
    for (var i = 0; i < banners.length; i++) {
      if (i != index) {
        banners[i].style.display = "none";
        controlDots[i].className = "control-dot";
      }
    }
    currentBanner = index;
  } else if (index >= banners.length) {
    switchBanner(0);
    currentBanner = 0;
  }
  autoPlay();
}

function autoPlay() {
  timer = setTimeout(function() {
    switchBanner(currentBanner + 1);
  }, 3000);
}
