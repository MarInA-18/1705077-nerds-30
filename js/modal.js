const modalLink = $(".footer-button-contact");
const modalPopup = $(".modal-form");
const modalClose = $(".modal-close");
const modalName = $(".name-user");
const modalMail = $(".mail-user");
const modalText = $(".text-user");

 // Form opening, close

 link.click(function(event) {
  event.preventDefault();
  console.log(input_email.val());
  if (popup.hasClass("modal-form-show")) {
    popup.removeClass("modal-form-show modal-form-error");
  }
  else {
    popup.removeClass("modal-form-error");
    popup.addClass("modal-form-show modal-form-error");
    setTimeout(function() {
      input_name.focus() }, 500);
  }
});

close.click(function(event) {
  event.preventDefault();
    popup.removeClass("modal-form-show modal-form-error");
});
