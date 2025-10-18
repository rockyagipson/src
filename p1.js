// Write a program that calculates the number of roots a quadratic equation will have
// The program should return a 2, 1, or 0 based on how many roots the equation has
// A quadratic formula has:
//   two roots when its discriminant is positive
//   one root when its discriminant is zero
//   zero roots when its discriminant is negative 
function p1(a, b, c) {
    var a = +prompt('Enter value for a:');
    var b = +prompt('Enter value for b:');
    var c = +prompt('Enter value for c:');
    
    discriminant = (b*b) - (4*a*c);

    if (discriminant > 0) {
        return 2;
        console.log("The number of roots is: " + 2);
    } else if (discriminant === 0) {
        return 1;
        console.log("The number of roots is: " + 1);
    } else {
        return 0;
        console.log("The number of roots is: " + 0);
   }
    // TODO: Calculate the discriminant
    // TODO: Return the number of roots
}


module.exports = p1;

