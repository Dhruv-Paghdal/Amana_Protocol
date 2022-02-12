let myNav = document.querySelector('#navBar');

function moveTop() {
  let scrolly=((document.body.scrollY)/(document.body.clientHeight))*100;
  let scrolltop=((document.documentElement.scrollTop)/(document.body.clientHeight))*100;

  if ((scrolly >= 1 ||scrolltop >= 1)) {
    // myNav.style.background="linear-gradient(10deg,#7f33d1,#b65d8a)";
    myNav.style.background="#FC3D39";
  }

  if ((scrolly <= 2 ||scrolltop <= 2)) {
    myNav.style.background="transparent";
  }
}

window.onscroll = function() {moveTop()};
