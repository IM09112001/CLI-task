const fs = require("fs");
let Y ;
let code_text = "";
let decode_text = "";

/* Coding with cesar shifr*/
var shifrInY1 = function (main_text) {
    for (let i = 0; i < main_text.length; i++) {
        var n = main_text[i].charCodeAt(0);
        if ((n >= 65 && n <= 90) || (n >= 97 && n <= 122)) {
            n += 1;
            if (n == 91) n = 65;
            if (n == 123) n = 97;
            var code_text1 = String.fromCharCode(n);
            code_text = code_text.concat(code_text1);
        }
        else code_text = code_text.concat(main_text[i]);
    }
    return code_text
}
/* Coding with cesar shifr*/

/* Decoding with cesar shifr*/
var shifrInY0 = function (main_text) {
    for (let i = 0; i < main_text.length; i++) {
        var n = main_text[i].charCodeAt(0);
        if ((n >= 65 && n <= 90) || (n >= 97 && n <= 122)) {
            n -= 1;
            if (n == 64) n = 97;
            if (n == 96) n = 122;
            var code_text1 = String.fromCharCode(n);
            code_text = code_text.concat(code_text1);
        }
        else code_text = code_text.concat(main_text[i]);
    }

    return code_text
}
/* Decoding with cesar shifr*/


var cesar = function (main_text, Y) {
    if (Y == 1) {
        var main_text = shifrInY1(main_text);

    }
    else {
        var main_text = shifrInY0(main_text);
    }
    return main_text;
}

module.exports=cesar;

