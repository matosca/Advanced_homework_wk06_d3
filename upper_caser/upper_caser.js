const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  return this.words.map( (words) => {
    return words.toUpperCase();
  });
};

module.exports = UpperCaser;
