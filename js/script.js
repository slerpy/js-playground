//var html = '';
//var red;
//var green;
//var blue;
//var rgbColor;
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//document.write(html);



/*
    Refactor above into  a simple loop.
 */

var html = '';
//var randomRGBColor;

function letsGetRandom() {
    return Math.floor(Math.random() * 256 );
}

function randomColor() {
    var color = 'rgb(';
    color += letsGetRandom() + ',';
    color += letsGetRandom() + ',';
    color += letsGetRandom() + ')';
    return color;
}

function print(message) {
    document.write(message);
}
function ooohColors () {
    html += '<div style="background-color:' + randomColor() + '"></div>';
}

for (i = 0; i < 10; i += 1) {
    ooohColors();
}

print(html);
