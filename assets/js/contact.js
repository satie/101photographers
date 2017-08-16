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
    data: JSON.stringify(contactData)
  }).done(function(response) {
    $form.css('visibility', 'hidden');
    $('span.message').css('visibility', 'visible').fadeIn(100);
    console.log(response);
  }).fail(function(error) {
    $('span.message').css('visibility', 'visible').html('Could not send your message. Please try again. Or email <a href="mailto:info@101photographers.in">info@101photographers.in</a>').fadeIn(100);
    console.log(error);
  });
});
