const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let currentKeyCount = 0
  document.body.addEventListener("keydown", function(pressed){
    if(pressed.key === codes[currentKeyCount]) {
      if(currentKeyCount === codes.length) {
        alert("OMGAWD YOU PRESSED SOME BUTTONS");
      } else {
        currentKeyCount = currentKeyCount + 1
      }
    }
  })
}

init()