describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function(){
      fizzBuzz= new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('returns fizz when 3 is entered' , function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
    it('returns fizz on 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });
  describe('multiples of 5', function() {
    it('returns buzz on 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
    it('returns buzz on 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });
  describe('multiples of 3 and 5', function() {
    it('returns fizzbuzz on 15', function(){
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    })
    it('returns fizzbuzz on 30', function(){
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  })
  describe('number counting', function () {
    it('1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
    it('29 for 29', function() {
      expect(fizzBuzz.play(29)).toEqual(29);
    });
  });
});
