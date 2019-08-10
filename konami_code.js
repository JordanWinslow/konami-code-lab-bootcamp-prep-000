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
  for(let currentIndex = 0; currentIndex < codes.length; currentIndex++){
    document.body.addEventListener("keydown", function(pressed){
      if(pressed.key === codes[currentIndex] && currentIndex === codes.length){
        alert("OMGAWD YOU PRESSED SOME BUTTONS")
      }
    })
  }
}

init()