
var a = 9;
var b = 4;
var c = 3;

if (a + b <= c || b + c <= a || c + a <= b) {
   alert('This is not a triangle. The sum of two sides is equal to or less than the third side')
   } else if (a === b && b === c && a === c) {
    alert('This is an equilateral triangle. All sides are equal');
   } else if (a === b || b === c || a === c) {
   alert('This is an isosceles triangle. Two sides are equal.');
   } else if (a + b > c || b + c > a || c + a > b) {
   alert('This is a scalene triangle. The sum of two sides is greater than the third side.');
   }