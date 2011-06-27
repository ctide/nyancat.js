#!/usr/bin/env node
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

var tty = require('tty');

var width = tty.getWindowSize(1)[1];
var height = tty.getWindowSize(1)[0];

var colors = require('colors'),
    //flag = ".:*~*:._",
    flag = "`·.,¸,.·*¯",
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
      console.error(nyancat.red);
      break;
    case 1:
      console.error(nyancat.yellow);
      break;
    case 2:
      console.error(nyancat.green);
      break;
    case 3:
      console.error(nyancat.cyan);
      break;
    case 4:
      console.error(nyancat.blue);
      break;
    case 5:
      console.error(nyancat.magenta);
      break;
    default:
      console.error(nyancat.rainbow);
      break;
  }
}

process.on('SIGINT', function() {
    var niftylettuce = "by niftylettuce | github.com/niftylettuce/nyancat.js | @niftylettuce";
        stagasSpaces = new Array(Math.floor((width - niftylettuce.length)/ 2)).join(" "),
        nyancatAsciiLength = "                                   _      _   ",
        nyancatAsciiSpaces = new Array(Math.floor((width - nyancatAsciiLength.length)/ 2)).join(" "),
        nyancatAscii = nyancatAsciiSpaces + "                                   _      _   \n\
    "+nyancatAsciiSpaces+" _ __  _   _  __ _ _ __   ___ __ _| |_   (_)___\n\
    "+nyancatAsciiSpaces+"| '_ \\| | | |/ _` | '_ \\ / __/ _` | __|  | / __|\n\
    "+nyancatAsciiSpaces+"| | | | |_| | (_| | | | | (_| (_| | |_ _ | \\__ \\\n\
    "+nyancatAsciiSpaces+"|_| |_|\\__, |\\__,_|_| |_|\\___\\__,_|\\__(_)/ |___/\n\
    "+nyancatAsciiSpaces+"       |___/                           |__/   ";

    console.error("\n\n" + nyancatAscii.rainbow);
    console.error("\n\n"+ stagasSpaces + niftylettuce+"\n\n");
    process.exit();
});

// figure out probability of a unicorn KO'ing a narwhal while wrestling a nyancat


// TODO: figure out why I can't call this function properly so it loops consistently
// function nyancat() {

(function magic() {
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
    process.nextTick(magic);
})();