const IsogramFinder = function (word) {
  this.word = word.toLowerCase();
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.split("").every( (letter, index) => this.word.indexOf(letter) === index);
  console.log(letter);
}

module.exports = IsogramFinder;
