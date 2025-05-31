var list = [];
var showPista = false;

var catBtns = document.querySelectorAll(".fotillo");

catBtns.forEach((catBtn, index) => {
  catBtn.addEventListener("click", () => {
    catBtn.classList.add("highlight");
    setTimeout(() => {
      catBtn.classList.remove("highlight");
    }, 200);
  });
});

function pressCat(cat) {
  list.push(cat);
    verifyList();

}

function verifyList() {
  
  const expectedOrder = ["milka", "leo", "chichon"];
  var gatosSeleccionadosEnOrden = list.every(
    (item, index) => item === expectedOrder[index]
  );

  if(list.length === 3 && !gatosSeleccionadosEnOrden){
    clearList();
  }

  if (gatosSeleccionadosEnOrden) {
    if (list.length === 3) {
      clearList();
      openDialog();
    }
  } else {
    clearList();
  }
}

function openDialog() {
  const dialog = document.getElementById("myDialog");
  const closeBtn = document.getElementById("closeDialogBtn");
  const pistaBtn = document.getElementById("pistaBtn");
  const pista = document.getElementById("pista");

  dialog.showModal();
  closeBtn.addEventListener("click", () => {
    dialog.close();
    pista.style.backgroundColor = "black";
    pista.textContent = "";
  });

  pistaBtn.addEventListener("click", () => {
    pista.textContent = "(1 + 10 + 99) x 6 - (5 + 11 + 92) x 3";
    pista.style.backgroundColor = "white";
  });
}

function clearList() {
  list.length = 0;
}
