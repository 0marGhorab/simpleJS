var qNum = 1;
var generatedNums = 6;
var lastQuoteNum = -1;
var num;
var quotes = [
  "“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde",
  "“So many books, so little time.” <br> ― Frank Zappa",
  "“A room without books is like a body without a soul.” <br> ― Marcus Tullius Cicero",
  "“You only live once, but if you do it right, once is enough.” <br> ― Mae West",
  "“Be the change that you wish to see in the world.” <br> ― Mahatma Gandhi",
  "“In three words I can sum up everything I've learned about life: it goes on.” <br> ― Robert Frost",
];

function generateQuote(qNum) {
  var elem = document.getElementById("generated");
  elem.classList.add("faded");
  setTimeout(() => {
    elem.innerHTML = quotes[qNum];
    elem.classList.remove('faded');
  }, 250);
}

function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}

function showQuote() {
  num = getRandomInt(generatedNums);
  if (lastQuoteNum === num) {
    showQuote();
  } else {
    lastQuoteNum = num;
    generateQuote(num);
  }
}
