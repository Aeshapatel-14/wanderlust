// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const img = document.getElementById("preview");
  img.src = URL.createObjectURL(file);
  img.style.display = "block";
}


  let profileMenu = document.querySelector(".profile-menu");
  let dropdown = document.querySelector(".dropdown-menu-custom");

  profileMenu.addEventListener("click", () => {
    dropdown.style.display =
      dropdown.style.display === "flex" ? "none" : "flex";
  });

  // click outside close
  document.addEventListener("click", (e) => {
    if (!profileMenu.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  let taxSwitch = document.getElementById("switchCheckDefault");

if (taxSwitch) {
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");

    for (let info of taxInfo) {
      if (info.style.display !== "inline") {
        info.style.display = "inline";
      } else {
        info.style.display = "none";
      }
    }
  });
}
