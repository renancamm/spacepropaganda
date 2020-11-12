function toggleIntro() {
    let dots = document.getElementById("intro-dots")
    let more = document.getElementById("intro-more")
    let toggle = document.getElementById("intro-toggle")

    if (more.style.display === "inline") {
        more.style.display = "none";
        dots.style.display = "inline";
        toggle.innerHTML = "Show more"
    }
    else {
        more.style.display = "inline";
        dots.style.display = "none";
        toggle.innerHTML = "Show less"
    }
}

function stringWave(el) {
    let content = el.innerHTML;
    var result = "";
    for (var i = 0; i < content.length; i++) {
        result = result + "<span>" + content.charAt(i) + "</span>";
    }
    el.innerHTML = result;

    let fragments = el.querySelectorAll("span");
    for (var i = 0; i < fragments.length; i++) {
        fragments[i].style.position = "relative";
        fragments[i].style["animation-delay"] = i/10 + "s";
        fragments[i].style["animation-name"] = "wave";
        fragments[i].style["animation-duration"] = "0.5s";
        fragments[i].style["animation-iteration-count"] = "infinite";
        fragments[i].style["animation-direction"] = "alternate";
    }

}


// Snippet from: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let tolerance = 100;
  let currentScrollPos = window.pageYOffset;
  let navbar = document.querySelector(".navbar");
  if (prevScrollpos > currentScrollPos || currentScrollPos < tolerance) {
    navbar.style.bottom = "0px";
  } else {
    navbar.style.bottom = navbar.offsetHeight * -1 + "px";
  }
  prevScrollpos = currentScrollPos;
}


document.addEventListener('DOMContentLoaded', function(event) {
  stringWave(document.querySelector("#title > h1"));
})