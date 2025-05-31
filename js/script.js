var list = [];
var showPista = false;

var catBtns = document.querySelectorAll(".fotillo");
console.log(catBtns);
catBtns.forEach((catBtn, index) => {
  catBtn.addEventListener("click", () => {
    catBtn.classList.add("highlight");
    setTimeout(() => {
      catBtn.classList.remove("highlight");
    }, 200);
  });
});

function pressCat(cat) {
  if (!list.find((a) => a == cat)) {
    list.push(cat);
    verifyList();
  } 
}

function verifyList() {
  const expectedOrder = ["milka", "leo", "chichon"];
  var gatosSeleccionadosEnOrden = list.every(
    (item, index) => item === expectedOrder[index]
  );

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
    pista.textContent = "";
  });

  pistaBtn.addEventListener("click", () => {
    pista.textContent = "Holaaa";
    pista.style.backgroundColor = "white";
  });
}

function clearList() {
  list.length = 0;
}
