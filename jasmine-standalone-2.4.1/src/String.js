String.prototype.hasVowels = function() {
  // Return true if a vowel is in the string
  // i modifier makes it case insesitive
  return /[aeiou]/i.test(this.valueOf());
};
