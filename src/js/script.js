function dropdown(question) {
  const idElemento = "pergunta-" + question.id;

  if (document.getElementById(idElemento).classList.contains("hidden")) {
    document.getElementById(idElemento).classList.remove("hidden");
    document.getElementById(idElemento).classList.add("show");
    question.src = "src/svg/icon_minus.svg";

  } else {
    document.getElementById(idElemento).classList.remove("show");
    document.getElementById(idElemento).classList.add("hidden");
    question.src = "src/svg/icon_plus.svg";
  }
}

function openUrl(url) {
  window.open(url, '_blank');
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.classList.add("visible");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.classList.remove("visible");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("visible");
  }
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(totalEquipmentsDGESTE)

    var totalEquipmentsDGESTE = JSON.parse(this.responseText).totalEquipmentsDGESTE;
    document.getElementById("n1").innerHTML = totalEquipmentsDGESTE
    var totalCertifiedTech = JSON.parse(this.responseText).totalCertifiedTech;
    document.getElementById("n2").innerHTML = totalCertifiedTech

  }
};
xhttp.open("GET", "webuser/api_view.php", true);
xhttp.send();