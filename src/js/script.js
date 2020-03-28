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
