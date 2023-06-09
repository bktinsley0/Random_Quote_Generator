/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * quotes array - contains 10 objects with quote, source, citation, and year properties
 ***/
const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "Speech",
    year: "1994",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    citation: "Speech",
    year: "1940",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    source: "Eleanor Roosevelt",
    citation: "Speech",
    year: "1950",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    citation: "Speech",
    year: "1980",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa",
    citation: "Speech",
    year: "1970",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    source: "Franklin D. Roosevelt",
    citation: "Speech",
    year: "1930",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    source: "Margaret Mead",
    citation: "Speech",
    year: "1960",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson",
    citation: "Speech",
    year: "1920",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    citation: "Speech",
    tag: "Motivational",
    year: "1950",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    citation: "Speech",
    year: "1770",
  },
];

/***
 * `getRandomQuote` function  - returns a random quote object from the quotes array
 ***/
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 * `printQuote` function  - calls the getRandomQuote function and stores the returned quote object in a variable
 ***/
const printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  html += `</p>`;
  document.getElementById("quote-box").innerHTML = html;
  changeBackgroundColor();
};

/***
 * extra credit - changes background color to a random color
 * */
const changeBackgroundColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

/***
 * extra credit - changes quote every 10 seconds
 * ***/
setInterval(printQuote, 10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
