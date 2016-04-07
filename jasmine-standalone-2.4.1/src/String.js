String.prototype.hasVowels = function() {
  // Return true if a vowel is in the string
  // i modifier makes it case insesitive
  return /[aeiou]/ig.test(this.valueOf());
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
    // Convert to decimal, add difference to convert to lowercase
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
  var matchWords = /([\wà-ż-']+)/g;

  // Array of words matched
  var wordsMatched = this.valueOf().match(matchWords);

  // Return array of words or empty array if none matched
  return wordsMatched || [];
};

String.prototype.wordCount = function() {
  // Return length of the array of words
  return this.words().length;
};

String.prototype.toCurrency = function() {
  // Remove white space from string
  var theString = this.valueOf().replace(/\s/g, '');

  // Catch non convertible input
  if (!theString || /[^\d\.,]/.test(theString)) {
    return '0';
  }

  // Match a digit (\d) that:
  //   Is followed by one or more groups of three digits (?=\d{3}+)
  //   The group of three digits should not be followed by a digit (?!\d)
  // In the entire string(g)
  return theString.replace(/(\d)(?=(\d{3})+(?!\d))/g, function(number) {
    // Add comma to matched number
    return number + ',';
  });
};

String.prototype.fromCurrency = function() {
  // Remove white space from string
  var theString = this.valueOf().replace(/\s/g, '');

  // Catch non convertible input
  if (!theString || /[^\d\.,]/.test(theString)) {
    return 0;
  }

  // Remove commas
  theString = theString.replace(/,/g, '');

  // Convert to number and return
  return Number(theString);
};
