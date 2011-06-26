/*
nyancat.js

Copyright (c) 2011 Nick Baugh (niftylettuce)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var sys = require('sys'),
    tty = require('tty');

var width = tty.getWindowSize(1)[1];
var height = tty.getWindowSize(1)[0];

var colors = require('colors'),
    flag = ".:*~*:._",
    flagLength = flag.length,
    numFlags = Math.floor(width / flagLength),
    position = 1,
    nyancat = 0,
    color = 0; // 0 = red, 1 = yellow, 3 = green, 4 = cyan, 5 = blue, 6 = magenta)

// { nyancat: 1, humanity: 0 }

// .color.inverse is too hard on the eyez :'(
function tastetherainbow(color, nyancat) {
  switch(color) {
    case 0:
      sys.puts(nyancat.red);
      break;
    case 1:
      sys.puts(nyancat.yellow);
      break;
    case 2:
      sys.puts(nyancat.green);
      break;
    case 3:
      sys.puts(nyancat.cyan);
      break;
    case 4:
      sys.puts(nyancat.blue);
      break;
    case 5:
      sys.puts(nyancat.magenta);
      break;
    default:
      sys.puts(nyancat.rainbow);
      break;
  }
}

process.on('SIGINT', process.exit);

// figure out probability of a unicorn KO'ing a narwhal while wrestling a nyancat


// TODO: figure out why I can't call this function properly so it loops consistently
// function nyancat() {

for(i=0;i<100;i++) { // temporary for loop
  for(f=1;f<numFlags + 1;f++) {
    for(h=0;h<height-1;h++) {
      var nyancat = "";
      for(w=0;w<numFlags;w++) {
        if(w === 0) {
          nyancat += flag.substring(position, flagLength);
        } else if (w === numFlags - 1) {
          nyancat += (flag + flag.substring(0, position));
        } else {
          nyancat += flag;
        }
      }
      if(color === 5)
        color = 0;
      else
        color++;
      tastetherainbow(color, nyancat);
    }
    if(position === flagLength) {
      position = 1;
    } else {
      position++;
    }
  }
}

  //nyancat();
//}
//nyancat();

var niftylettuce = "by niftylettuce | github.com/niftylettuce/nyancat.js | @niftylettuce";
    stagasSpaces = new Array(Math.floor((width - niftylettuce.length)/ 2)).join(" ");
sys.puts("\n\n"+ stagasSpaces + niftylettuce.magenta+"\n\n");

