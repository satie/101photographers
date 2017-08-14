$('#contactForm').submit(function(event) {
  event.preventDefault();
  const $form = $(this);

  let contactData = {
    name: $form.find("input[name='name']").val(),
    email: $form.find("input[name='email']").val(),
    message: $form.find("textarea[name='message']").val()
  };
  let postUrl = $form.attr("action");

  $.ajax({
    type: 'POST',
    url: postUrl,
    contentType: 'application/json',
    crossDomain: true,
    data: contactData,
    dataType: 'json'
  }).done(function(response) {
    console.log(data);
  }).fail(function(error) {
    console.log(error);
  });
});