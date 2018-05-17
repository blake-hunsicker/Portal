window.onscroll = function() {myFunction()};

var subjectpanel = document.getElementsByClass("subject-panel");
var sticky = subjectpanel = subjectpanel.offsetTop;

var originalwidth = subjectpanel.style.width;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    subjectpanel.classList.add("fixed");
    subjectpanel.style.width = originalwidth;
  } else {
    subjectpanel.classList.remove("fixed");
  }
}
