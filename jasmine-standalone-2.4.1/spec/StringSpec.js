describe('Extended String Class', function() {

  describe('method hasVowels', function() {
      it('is a function', function() {
          expect('A string'.hasVowels).toEqual(jasmine.any(Function));
      });

      it('returns true if a string contains vowels', function() {
          expect('an'.hasVowels()).toBeTruthy();
          expect('egg'.hasVowels()).toBeTruthy();
          expect('indy'.hasVowels()).toBeTruthy();
          expect('on'.hasVowels()).toBeTruthy();
          expect('up'.hasVowels()).toBeTruthy();
          expect('cafè'.hasVowels()).toBeTruthy();
          expect('an indy egg on up cafè'.hasVowels()).toBeTruthy();
          expect('CASE'.hasVowels()).toBeTruthy();
          expect('?/ENDS'.hasVowels()).toBeTruthy();
          expect('WITH'.hasVowels()).toBeTruthy();
          expect('ON'.hasVowels()).toBeTruthy();
          expect('UP5'.hasVowels()).toBeTruthy();
          expect('Combining CasEs and +?\\ 4768'.hasVowels()).toBeTruthy();
      });

      it('returns false if a string does not contain vowels', function() {
          expect('bcd'.hasVowels()).toBe(false);
          expect('fgh jk'.hasVowels()).toBe(false);
          expect('LMN'.hasVowels()).toBe(false);
          expect('pqr STV'.hasVowels()).toBe(false);
          expect('wXyZ'.hasVowels()).toBe(false);
          expect('!@#$%^&()_+?'.hasVowels()).toBe(false);
          expect('2355805'.hasVowels()).toBe(false);
          expect('áéîôü'.hasVowels()).toBe(false);
      });
  });

  describe('method toUpper', function() {
      it('is a function', function() {
          expect('A string'.toUpper).toEqual(jasmine.any(Function));
      });

      it('converts lower case characters to upper case', function() {
          expect('an'.toUpper()).toBe('AN');
          expect('the rain in spain'.toUpper()).toBe('THE RAIN IN SPAIN');
          expect('cOmBiNaTiOn'.toUpper()).toBe('COMBINATION');
          expect('!c@h#a$r%a^c&t*e(r)s?'.toUpper())
              .toBe('!C@H#A$R%A^C&T*E(R)S?');
          expect('num123bers456'.toUpper()).toBe('NUM123BERS456');
          expect('dìàctérícs'.toUpper()).toBe('DÌÀCTÉRÍCS');
      });

      it('no conversion on upper case and special characters', function() {
          expect('ABCD'.toUpper()).toBe('ABCD');
          expect('12345'.toUpper()).toBe('12345');
          expect('!@#$'.toUpper()).toBe('!@#$');
          expect('    '.toUpper()).toBe('    ');
      });
  });

  describe('method toLower', function() {
      it('is a function', function() {
          expect('A string'.toLower).toEqual(jasmine.any(Function));
      });

      it('converts upper case characters to lower case', function() {
          expect('An'.toLower()).toBe('an');
          expect('THE RAIN IN SPAIN'.toLower()).toBe('the rain in spain');
          expect('cOmBiNaTiOn'.toLower()).toBe('combination');
          expect('!C@H#A$R%A^C&T*E(R)S?'.toLower())
              .toBe('!c@h#a$r%a^c&t*e(r)s?');
          expect('NUM123BERS456'.toLower()).toBe('num123bers456');
          expect('DÌÀCTÉRÍCS'.toLower()).toBe('dìàctérícs');
      });

      it('no conversion on lower case and special characters', function() {
          expect('abcd'.toLower()).toBe('abcd');
          expect('12345'.toLower()).toBe('12345');
          expect('!@#$'.toLower()).toBe('!@#$');
          expect('    '.toLower()).toBe('    ');
      });
  });

  describe('method ucFirst', function() {
      beforeAll(function() {
        spyOn(String.prototype, 'toUpper').and.callThrough();
      });
      it('is a function', function() {
          expect('A string'.ucFirst).toEqual(jasmine.any(Function));
      });

      it('converts first letters to upper case', function() {
          expect('an'.ucFirst()).toBe('An');
          expect('the rain in spain'.ucFirst()).toBe('The rain in spain');
          expect('cOmBiNaTiOn'.ucFirst()).toBe('COmBiNaTiOn');
          expect('!c@h#a$r%a^c&t*e(r)s?'.ucFirst())
              .toBe('!c@h#a$r%a^c&t*e(r)s?');
          expect('num123bers456'.ucFirst()).toBe('Num123bers456');
          expect('ìàctérícs'.ucFirst()).toBe('Ìàctérícs');
      });

      it('does not carry out unnessecary conversions', function() {
          expect('ABCD'.ucFirst()).toBe('ABCD');
          expect('12345'.ucFirst()).toBe('12345');
          expect('!@#$'.ucFirst()).toBe('!@#$');
          expect('    '.ucFirst()).toBe('    ');
          expect('Abott'.ucFirst()).toBe('Abott');
      });

      it('calls method toUpper', function() {
        expect(String.prototype.toUpper).toHaveBeenCalledTimes(5);
      });
  });

  describe('method isQuestion', function() {
      it('is a function', function() {
          expect('A string'.isQuestion).toEqual(jasmine.any(Function));
      });

      it('returns true if string is a question', function() {
          expect('word?'.isQuestion()).toBeTruthy();
          expect('A simple sentence?'.isQuestion()).toBeTruthy();
          expect('with* other% characters?'.isQuestion()).toBeTruthy();
          expect('???????'.isQuestion()).toBeTruthy();
          expect('IN UPPER CASE?'.isQuestion()).toBeTruthy();
          expect('Ends with white space? '.isQuestion()).toBeTruthy();
      });

      it('returns false if string is not a question', function() {
          expect('word?%'.isQuestion()).toBe(false);
          expect('?A simple sentence'.isQuestion()).toBe(false);
          expect('!@#$*&^%'.isQuestion()).toBe(false);
          expect('??????#'.isQuestion()).toBe(false);
          expect('Eager question?!'.isQuestion()).toBe(false);
      });
  });

  describe('method words', function() {
      it('is a function', function() {
          expect('A string'.words).toEqual(jasmine.any(Function));
      });

      it('returns an array of words in string', function() {
          expect('one two three'.words())
              .toEqual(['one', 'two', 'three']);
          expect('one, two, three'.words())
              .toEqual(['one', 'two', 'three']);
          expect('a/simple/sentence'.words())
              .toEqual(['a', 'simple', 'sentence']);
          expect('word'.words())
              .toEqual(['word']);
          expect(''.words())
              .toEqual([]);
          expect(' A dog (canine) is a pet'.words())
              .toEqual(['A', 'dog', 'canine', 'is', 'a', 'pet']);
          expect('DrInK tea at Cafè'.words())
              .toEqual(['DrInK', 'tea', 'at', 'Cafè']);
          expect('complex-words like O\'reilly'.words())
              .toEqual(['complex-words', 'like', 'O\'reilly']);
          expect('this/that'.words())
                  .toEqual(['this', 'that']);
      });
  });

  describe('method wordCount', function() {
      beforeAll(function() {
        spyOn(String.prototype, 'words').and.callThrough();
      });

      it('is a function', function() {
          expect('A string'.wordCount).toEqual(jasmine.any(Function));
      });


      it('returns number of words in string', function() {
          // spyOn(String.prototype, 'words').and.callThrough();
          expect('a b, c; d'.wordCount()).toBe(4);
          expect(''.wordCount()).toBe(0);
          expect('word'.wordCount()).toBe(1);
          expect('dìàctérícs cafè'.wordCount()).toBe(2);
          expect('a simple !@##$%^^'.wordCount()).toBe(2);
          expect('A normal sentence.'.wordCount()).toBe(3);
      });

      it('calls method words', function() {
        expect(String.prototype.words).toHaveBeenCalledTimes(6);
      });
  });

  describe('method toCurrency', function() {
      it('is a function', function() {
          expect('A string'.toCurrency).toEqual(jasmine.any(Function));
      });

      it('returns currency representation of string', function() {
          expect('11111.11'.toCurrency()).toBe('11,111.11');
          expect('54'.toCurrency()).toBe('54');
          expect('347838437438249'.toCurrency()).toBe('347,838,437,438,249');
          expect('2.50'.toCurrency()).toBe('2.50');
          expect('27 324'.toCurrency()).toBe('27,324');
          expect('98,723.12'.toCurrency()).toBe('98,723.12');
      });

      it('returns 0 for non number input', function() {
          expect('123u'.toCurrency()).toBe('0');
          expect('ten'.toCurrency()).toBe('0');
          expect(''.toCurrency()).toBe('0');
          expect('2e5'.toCurrency()).toBe('0');
          expect('!@##$%^^'.toCurrency()).toBe('0');
          expect('[345]'.toCurrency()).toBe('0');
      });
  });

  describe('method fromCurrency', function() {
      it('is a function', function() {
          expect('A string'.fromCurrency).toEqual(jasmine.any(Function));
      });

      it('returns currency representation of string', function() {
          expect('11,111.11'.fromCurrency()).toBe(11111.11);
          expect('54'.fromCurrency()).toBe(54);
          expect('347,838,437,438,249'.fromCurrency())
              .toBe(347838437438249);
          expect('2.50'.fromCurrency()).toBe(2.50);
          expect('27,324'.fromCurrency()).toBe(27324);
          expect('98,723.12'.fromCurrency()).toBe(98723.12);
      });

      it('returns 0 for non parsable input', function() {
          expect('123u'.fromCurrency()).toBe(0);
          expect('ten'.fromCurrency()).toBe(0);
          expect(''.fromCurrency()).toBe(0);
          expect('2e5'.fromCurrency()).toBe(0);
          expect('!@##$%^^'.fromCurrency()).toBe(0);
          expect('[345]'.fromCurrency()).toBe(0);
      });
  });

});
