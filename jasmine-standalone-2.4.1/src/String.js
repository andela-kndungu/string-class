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
  var matchWords = /([\wà-ż-']+)/g;
  // Array of words matched
  var wordsMatched = this.valueOf().match(matchWords);
  // Return array of words or empty array if none matched
  if(wordsMatched) {
    return wordsMatched;
  }
  return [];
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

  // Iterations through which commas will be added
  var thousands =Math.floor(this.valueOf().length/3);

  // Will add the commas
  var helper = function(numbers) {
    return ',' + numbers;
  };

  // Progressively add commas
  for (var i = 0; i <= thousands - 1; i++) {
    theString = theString.replace(/\d{3}$|\d{3}[\.,]{1}/g, helper);
  }

  // Remove duplicate commas
  theString = theString.replace(/,{2,}/g, ',');

  // Remove commas from beginning of string
  if(/^,/.test(theString)) {
    theString = theString.substr(1);
  }
  return theString.replace(/,{2,}/g, ',');
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
