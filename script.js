var img = document.querySelector(".hamb_mob");
var nav = document.querySelector(".hide"),
  navToggle = document.querySelector(".hamburger");

if (navToggle) {
  navToggle.addEventListener("click", function (e) {
    nav.classList.toggle("menu");
    nav.classList.toggle("hide");
    img.src = nav.classList.contains("menu") ? "images/icon-close (1).svg" : "images/icon-hamburger.svg ";
    e.preventDefault();
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 679px)").matches) {
      nav.classList.add("hide");
      nav.classList.remove("menu");
      img.src = "images/icon-hamburger.svg";
    }
  });
}

function onTabClick(event) {
  event.preventDefault();
  let activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  event.target.parentElement.classList.add("active");
  document.getElementById(event.target.href.split("#")[1]).classList.add("active");
}

document.getElementById("nav-tab").addEventListener("click", onTabClick, false);

(function () {
  const accordion = document.getElementsByClassName("accordion");
  let current = -1;

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      if (i !== current && current !== -1) {
        accordion[current].classList.remove("active");
        accordion[current].nextElementSibling.classList.remove("panel-open");
      }
      this.nextElementSibling.classList.toggle("panel-open");
      current = this.classList.toggle("active") ? i : -1;
    });
  }
})();

function validation() {
  var form = document.getElementById("email12");
  var email = document.getElementById("email-field").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Valid Email Address";
      text.style.color = "#ooffoo";
  }
  else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML = "Please Enter Vaild Email Address";
      text.style.color = "#ff0000";
  }

  if (email == "") {
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.innerHTML = "";
      text.style.color = "#ooffoo";
  }
}