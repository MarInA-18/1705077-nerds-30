var link = $(".footer-button-contact"),
    popup = $(".modal-user"),
    close = $(".modal-close"),
    name = $(".name-user"),
    mail = $(".mail-user"),
    text = $(".text-user");

 // Form opening, close

 link.click(function(event) {
  event.preventDefault();
  console.log(input_email.val());
  if (popup.hasClass("modal-user")) {
    popup.removeClass("modal-user");
  }
  else {
    popup.removeClass("modal-user");
    popup.addClass("modal-user");
    setTimeout(function() {
      input_name.focus() }, 500);
  }
});

close.click(function(event) {
  event.preventDefault();
    popup.removeClass("modal-user");
});

// Form closure with Esc
$(window).keydown(function(event) {
  if (event.keyCode == 27
  && popup.hasClass("modal-user")) {
    popup.removeClass("modal-user");
  }
});
