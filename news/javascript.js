// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").className = "navbar navbar-shrink";
    document.getElementById("logo-navbar").style.display = "flex";
    document.getElementById("logo").style.display = "none";
    document.getElementById("socialIcons").className =
      "socialmedia socialmedia-shrink";
    document.getElementById("login").className = "login login-shrink";
  } else {
    document.getElementById("navbar").className = "navbar";
    document.getElementById("logo").style.display = "flex";
    document.getElementById("logo-navbar").style.display = "none";
    document.getElementById("socialIcons").className = "socialmedia";
    document.getElementById("login").className = "login";
  }
}
