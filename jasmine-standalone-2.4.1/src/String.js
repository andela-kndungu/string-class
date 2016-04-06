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
