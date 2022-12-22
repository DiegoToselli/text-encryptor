const $textArea = document.getElementById("txt-input");
const $btnEncrpyt = document.getElementById("btn-encrypt");
const $btnDecrpyt = document.getElementById("btn-decrypt");
const $paraOutput = document.getElementById("txt-output");

function encrypt() {
  var input = $textArea.value.toLocaleLowerCase();
  var output = input
    .replace(/e/g, "enter")
    .replace(/é/g, "enter")
    .replace(/i/g, "imes")
    .replace(/í/g, "imes")
    .replace(/a/g, "ai")
    .replace(/á/g, "ai")
    .replace(/o/g, "ober")
    .replace(/ó/g, "ober")
    .replace(/u/g, "ufat")
    .replace(/ú/g, "ufat");
  showOutput(output);
}

function decrypt() {
  var input = $textArea.value.toLocaleLowerCase();
  var output = input
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  showOutput(output);
}

function showOutput(output) {
  if (output.length >= 157) {
    $paraOutput.classList.add("text-overflow");
  } else {
    $paraOutput.classList.remove("text-overflow");
  }
  $paraOutput.classList.add("text-break");
  $paraOutput.innerHTML = output;
  hide();
}

function hide() {
  const $paraInfo = document.getElementById("txt-info");

  $paraInfo.classList.add("hide");
}

// Eventos onClick botones
$btnEncrpyt.onclick = encrypt;
$btnDecrpyt.onclick = decrypt;
