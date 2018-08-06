function FizzBuzz () {
}

FizzBuzz.prototype.play = function(num) { 
  if(num % 3 == 0 && num % 15 == 0) { 
    return 'FizzBuzz';
  }
  else if(num % 3 == 0) {
    return 'Fizz';
  }
  else if(num % 5 == 0) {
    return 'Buzz';
  }
  return num;
}

var fizzBuzz = new FizzBuzz();

for(var i = 1; i <=100; i++) {
  console.log(fizzBuzz.play(i));
}