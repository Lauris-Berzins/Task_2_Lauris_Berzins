const quotes = [
  {
    quote_title: 'Ken Ludden',
    quote_position: 'Director, Margot Fonteyn Academy of Ballet',
    quote_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit',
  },
  {
    quote_title: 'John Doe',
    quote_position: 'Some Position',
    quote_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    quote_title: 'Jane Smith',
    quote_position: 'Another Position',
    quote_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const quoteContainer = carousel.querySelector('.quote_container');
const titleElement = quoteContainer.querySelector('.quote_title');
const positionElement = quoteContainer.querySelector('.quote_position');
const textElement = quoteContainer.querySelector('.quote_text');

function showCurrentQuote() {
  const currentQuote = quotes[currentIndex];
  titleElement.textContent = currentQuote.quote_title;
  positionElement.textContent = currentQuote.quote_position;
  textElement.textContent = currentQuote.quote_text;
}

function showNextQuote() {
  currentIndex++;
  if (currentIndex >= quotes.length) {
    currentIndex = 0;
  }

  setTimeout(() => {
  
    showCurrentQuote();
  
  }, 300);
}

function showPreviousQuote() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = quotes.length - 1;
  }

  setTimeout(() => {

    showCurrentQuote();

  }, 300);
}

const back_button = carousel.querySelector('.back_button');
const forward_button = carousel.querySelector('.forward_button');

forward_button.addEventListener('click', showNextQuote);
back_button.addEventListener('click', showPreviousQuote);

// Show the initial quote
showCurrentQuote();
