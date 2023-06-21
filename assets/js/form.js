function closeModal() {
  document.getElementById('error-modal').style.display = 'none';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var nameInput = document.querySelector('.form-name');
  var emailInput = document.querySelector('.form-email');
  var phoneInput = document.querySelector('.form-phone');
  var messageInput = document.querySelector('.form-textarea');
  var checkboxInput = document.querySelector('.form-checkbox');
  var thankYouMessage1 = document.getElementById('thank-you-message1');
  var thankYouMessage2 = document.getElementById('thank-you-message2');
  var errorMessage = document.getElementById('error-message');
  var errorModal = document.getElementById('error-modal');
  var formElements = document.querySelectorAll('.form-label, .form-tos, .form-btn');

  var errorMessages = [];
  if (!nameInput.value) {
    errorMessages.push('Please enter your name.');
  }
  if (!emailInput.value) {
    errorMessages.push('Please enter your email.');
  } else if (!validateEmail(emailInput.value)) {
    errorMessages.push('Please enter a valid email address.');
  }
  if (!phoneInput.value) {
    errorMessages.push('Please enter your phone number.');
  } else if (!validatePhone(phoneInput.value)) {
    errorMessages.push('Invalid phone number. Please enter numbers only.');
  }
  if (!messageInput.value) {
    errorMessages.push('Please enter your message.');
  }
  if (!checkboxInput.checked) {
    errorMessages.push('Please agree to the terms and conditions.');
  }

  if (errorMessages.length === 0) {
    // Form inputs are valid, send the form data to Formspree
    var form = document.getElementById('contact-form');
    var action = form.getAttribute('action');
    var method = form.getAttribute('method');

    // Create a new FormData object and append form data
    var formData = new FormData(form);
    formData.append('_subject', 'New Form Submission'); // Optional subject for the email

    // Send the form data to Formspree using AJAX
    fetch(action, {
      method: method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      if (response.ok) {
        showThankYouMessage();
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        messageInput.value = '';
        checkboxInput.checked = false;
      } else {
        throw new Error('Failed to send form data.');
      }
    })
    .catch(function(error) {
      errorMessage.innerHTML = 'An error occurred while sending the form.';
      errorModal.style.display = 'block';
      console.error(error);
    });
  } else {
    errorMessage.innerHTML = errorMessages.join('<br><br>');
    errorModal.style.display = 'block';
  }
});

function showThankYouMessage() {
  var thankYouMessage1 = document.getElementById('thank-you-message1');
  var thankYouMessage2 = document.getElementById('thank-you-message2');
  var formElements = document.querySelectorAll('.form-label, .form-tos, .form-btn');

  thankYouMessage1.style.display = 'block';
  thankYouMessage2.style.display = 'block';
  formElements.forEach(function(element) {
    element.style.display = 'none';
  });

  setTimeout(function() {
    thankYouMessage1.style.display = 'none';
    thankYouMessage2.style.display = 'none';
    formElements.forEach(function(element) {
      element.style.display = 'block';
    });
  }, 5000);
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  var phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
}