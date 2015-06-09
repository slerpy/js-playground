/********************************************************

 experimenting with math functions.

 ********************************************************/


/*  start simple. area of rectangle */

function getRect( width, length, unit ) {
    var area = width * length;
    return area + " " + unit;
}

getRect(10, 20, 'sq ft');