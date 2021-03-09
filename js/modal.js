const modalLink = document.querySelector(".footer-button-contact");
const modalPopup = document.querySelector(".modal-user");
const modalClose = loginPopup.querySelector(".modal-close");
const modalForm = loginPopup.querySelector(".modal-form");
const modalName = loginPopup.querySelector(".name-user");
const modalMail = loginPopup.querySelector(".mail-user");
const modalText = loginPopup.querySelector(".text-user");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    modalName.value = storage;
  }

  modalLogin.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalMail.value) {
  evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", modalName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
    }
  }
});
