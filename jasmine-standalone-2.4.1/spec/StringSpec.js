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

  describe('method toUpper', function() {
    it('is defined', function() {
      expect(String.toUpper).toBeDefined();
    });

    it('is a function', function() {
      expect(String.toUpper).toEqual(jasmine.any(Function));
    });

    it('converts lower case characters to upper case', function() {
      expect('an'.toUpper()).toBe('AN');
      expect('the rain in spain'.toUpper()).toBe('THE RAIN IN SPAIN');
      expect('cOmBiNaTiOn'.toUpper()).toBe('COMBINATION');
      expect('!c@h#a$r%a^c&t*e(r)s?'.toUpper()).toBe('!C@H#A$R%A^C&T*E(R)S?');
      expect('num123bers456'.toUpper()).toBe('NUM123BERS456');
      expect('dìàctérícs'.toUpper()).toBe('DÌÀCTÉRÍCS');
    });

    it('does not convert non alphabetic and upper case characters', function() {
      expect('ABCD'.toUpper()).toBe('ABCD');
      expect('12345'.toUpper()).toBe('12345');
      expect('!@#$'.toUpper()).toBe('!@#$');
      expect('    '.toUpper()).toBe('    ');
    });
  });

  describe('method toLower', function() {
    it('is defined', function() {
      expect(String.toLower).toBeDefined();
    });

    it('is a function', function() {
      expect(String.toLower).toEqual(jasmine.any(Function));
    });

    it('converts upper case characters to lower case', function() {
      expect('An'.toLower()).toBe('an');
      expect('THE RAIN IN SPAIN'.toLower()).toBe('the rain in spain');
      expect('cOmBiNaTiOn'.toLower()).toBe('combination');
      expect('!C@H#A$R%A^C&T*E(R)S?'.toLower()).toBe('!c@h#a$r%a^c&t*e(r)s?');
      expect('NUM123BERS456'.toLower()).toBe('num123Bbers456');
      expect('DÌÀCTÉRÍCS'.toLower()).toBe('dìàctérícs');
    });

    it('does not convert non alphabetic and lower case characters', function() {
      expect('abcd'.toUpper()).toBe('abcd');
      expect('12345'.toUpper()).toBe('12345');
      expect('!@#$'.toUpper()).toBe('!@#$');
      expect('    '.toUpper()).toBe('    ');
    });
  });
});
