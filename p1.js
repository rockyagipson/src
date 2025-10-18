// Write a program that calculates the number of roots a quadratic equation will have
// The program should return a 2, 1, or 0 based on how many roots the equation has
// A quadratic formula has:
//   two roots when its discriminant is positive
//   one root when its discriminant is zero
//   zero roots when its discriminant is negative 
function p1(a, b, c) {
    const discriminant = (b*b) - (4*a*c);
    
    if (discriminant > 0) {
        console.log('Two Roots');
        return 2;
    } else if (discriminant === 0) {
        console.log('One Root');
        return 1;
    } else {
        console.log('No Roots');
        return 0;
    }   

    // TODO: Calculate the discriminant
    // TODO: Return the number of roots
}





module.exports = p1;

