/*
    For looping though arrays.
 */

var playList = [
    'I did it my way',
    'Respect',
    'Imagine',
    'Born To Run',
    'Louie Louie',
    'Maybellene'
];


function printList( list ) {
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i += 1) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

function print(html) {
    document.write(html);
}



printList( playList );