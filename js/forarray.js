/*
    For looping though arrays.
 */

var playList = [
        ['I did it my way', 'Frank Sinatra'],
        ['Respect', 'Aretha Franklin'],
        ['Imagine', 'John Lennon'],
        ['Born to Run', 'Bruce Springsteen'],
        ['Louie Louie', 'The Kingsmen'],
        ['Maybellene', 'Chuck Berry']
    ]
;


function printSongs( songs ) {
    var listHTML = '<ol>';
    for (var i = 0; i < songs.length; i += 1) {
        listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

function print(html) {
    document.write('<');
}



printSongs( playList );