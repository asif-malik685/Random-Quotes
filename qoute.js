let quotes = [
  "A rose by any other name would smell as sweet.",
  "Eighty percent of success is showing up",
  "He travels the fastest who travels alone.",
  "If at first you dont succeed, try, try again.",
  "Keep your friends close, but your enemies closer.",
];

function Newquote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = document.getElementById("quote");
  quote.innerText = quotes[randomIndex];
}
function CopyQuote() {
  let quote = document.getElementById("quote");
  navigator.clipboard.writeText(quote.innerText);
  alert ("Quote copied")
}
