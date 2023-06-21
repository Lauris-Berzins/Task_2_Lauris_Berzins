const quotes = document.querySelectorAll('.quote');
const back_button = document.querySelector('.back_button');
const forward_button = document.querySelector('.forward_button');

let currentIndex = 0;

function showCurrentQuote() {
  for (let i = 0; i < quotes.length; i++) {
    if (i === currentIndex) {
      quotes[i].classList.add('active');
    } else {
      quotes[i].classList.remove('active');
    }
  }
}

function showNextQuote() {
  currentIndex++;
  if (currentIndex >= quotes.length) {
    currentIndex = 0;
  }
  showCurrentQuote();
}

function showPreviousQuote() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = quotes.length - 1;
  }
  showCurrentQuote();
}

forward_button.addEventListener('click', showNextQuote);
back_button.addEventListener('click', showPreviousQuote);

// Show the initial quote
showCurrentQuote();