const listDropdown = document.getElementById("list");
let display = 0;

function hideShow() {
  if (display == 0) {
    listDropdown.style.display = "none";
    display = 1;
  } else {
    listDropdown.style.display = "flex";
    display = 0;
  }
}
