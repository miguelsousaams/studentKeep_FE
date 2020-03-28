function dropdown(question) {
  const idElemento = "pergunta-" + question.id;

  if (document.getElementById(idElemento).classList.contains("hidden")) {
    document.getElementById(idElemento).classList.remove("hidden");
    document.getElementById(idElemento).classList.add("show");
    question.src = "src/svg/icon_minus.svg";

  }else {
    document.getElementById(idElemento).classList.remove("show");
    document.getElementById(idElemento).classList.add("hidden");
    question.src = "src/svg/icon_plus.svg";
  }
}


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}