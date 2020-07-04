
const quotes = [
  {
    name: 'Nelson Mandela',
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
  },
  {
    name: 'Walt Disney',
    quote: 'The way to get started is to quit talking and begin doing.'
  },
  {
    name: "Steve Jobs",
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
  },
  {
    name: 'Eleanor Roosevelt',
    quote: 'If life were predictable it would cease to be life, and be without flavor.'
  }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
  let number = Math.floor(Math.random()*quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}

