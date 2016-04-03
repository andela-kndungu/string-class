describe('Extended String Class', function() {
  describe('method hasVowels', function() {
    it('is defined', function() {
      expect(String.hasVowels).toBeDefined();
    });

    it('is a function', function() {
      expect(String.hasVowels).toEqual(jasmine.any(Function));
    });

    it('returns true if a string contains vowels', function() {
      expect('an'.hasVowels()).toBe(true);
      expect('egg'.hasVowels()).toBe(true);
      expect('indy'.hasVowels()).toBe(true);
      expect('on'.hasVowels()).toBe(true);
      expect('up'.hasVowels()).toBe(true);
      expect('cafè'.hasVowels()).toBe(true);
      expect('an indy egg on up cafè'.hasVowels()).toBe(true);
      expect('CASE'.hasVowels()).toBe(true);
      expect('?/ENDS'.hasVowels()).toBe(true);
      expect('WITH'.hasVowels()).toBe(true);
      expect('ON'.hasVowels()).toBe(true);
      expect('UP5'.hasVowels()).toBe(true);
      expect('A Sentence Combining CasEs and +?\\ 4768'.hasVowels()).toBe(true);
    });

    it('returns false if a string does not contain vowels', function() {
      expect('bcd'.hasVowels()).toBe(false);
      expect('fgh ijk'.hasVowels()).toBe(false);
      expect('LMN'.hasVowels()).toBe(false);
      expect('pqr STV'.hasVowels()).toBe(false);
      expect('wXyZ'.hasVowels()).toBe(false);
      expect('!@#$%^&()_+?'.hasVowels()).toBe(false);
      expect('2355805'.hasVowels()).toBe(false);
      expect('áéîôü'.hasVowels()).toBe(false);
    });
  });
});
