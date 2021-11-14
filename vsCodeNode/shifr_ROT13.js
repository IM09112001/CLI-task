let Y ;
let code_text = "";
let decode_text = "";

/* Coding-Decoding with ROT13 shifr*/
var shifrInY1 = function (main_text) {
    for (let i = 0; i < main_text.length; i++) {
        var n = main_text[i].charCodeAt(0);
        if ((n >= 65 && n <= 90)) {
            n += 13;
            if (n > 90) {
                n = 64 - 90 + n;
            }

            var code_text1 = String.fromCharCode(n);
            code_text = code_text.concat(code_text1);
        }

        else if ((n >= 97 && n <= 122)) {
            n += 13;
            if (n > 122) {
                n = 96 - 122 + n;
            }
            var code_text1 = String.fromCharCode(n);
            code_text = code_text.concat(code_text1);
        }


        else code_text = code_text.concat(main_text[i]);
    }
    return code_text
}
/* Coding-Decoding with ROT13 shifr*/


var ROT13 = function (main_text, Y) {
    if (Y == 1 || Y==0) {
        var main_text = shifrInY1(main_text);

    }

    else console.log("ERROR!")
    return main_text;
}
module.exports=ROT13

console.log(ROT13("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 1))