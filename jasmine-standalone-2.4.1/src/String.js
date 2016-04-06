String.prototype.hasVowels = function() {
  // Return true if a vowel is in the string
  // i modifier makes it case insesitive
  return /[aeiou]/i.test(this.valueOf());
};

String.prototype.toUpper = function() {
  // Difference between upper and lowercase characters in ASCII chart
  var lowerUpperDifference = 'a'.charCodeAt() - 'A'.charCodeAt();

  // Search for all lowercase characters and convert to uppercase equivalent
  return this.replace(/[a-zà-ż]/g, function convert(character) {
    // Convert to decimal, subtract difference to convert to uppercase
    // then convert back to a character
    return String.fromCharCode(character.charCodeAt() - lowerUpperDifference);
  });
};

String.prototype.toLower = function() {
  // Difference between upper and lowercase characters in ASCII chart
  var lowerUpperDifference = 'a'.charCodeAt() - 'A'.charCodeAt();

  // Search for all lowercase characters and convert to uppercase equivalent
  return this.replace(/[A-ZÀ-Ż]/g, function convert(character) {
    // Convert to decimal, subtract difference to convert to uppercase
    // then convert back to a character
    return String.fromCharCode(character.charCodeAt() + lowerUpperDifference);
  });
};

String.prototype.ucFirst = function() {
  // Search for lowercase and diacteric characters at beginning of string
  // and convert to uppercase equivalent
  return this.replace(/^[a-zà-ż]/, function convert(character) {
    return character.toUpper();
  });
};

String.prototype.isQuestion = function() {
  // Return true if string ends with question mark
  return /[?\s+]$/.test(this.valueOf());
};

String.prototype.words = function() {
  // Match a word character with or without diacterics
  var matchWords = /([à-ż]*\w+[à-ż]*)/g;
  // Array of words matched
  var wordsMatched = this.valueOf().match(matchWords);
  // Return array of words or empty array if none matched
  if(wordsMatched) {
    return wordsMatched;
  }
  return [];

};
