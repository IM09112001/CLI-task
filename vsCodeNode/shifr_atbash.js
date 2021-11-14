let code_text = "";
let code_text1 = "";


for (let i = 65; i < 91; i++) {

    code_text = code_text.concat(String.fromCharCode(i));
}
code_text = code_text.split("").reverse().join("");

var shifrInAtbash = function (main_text) {
    for (let i = 0; i < main_text.length; i++) {
        var n = main_text[i].charCodeAt(0);
        if ((n >= 65 && n <= 90)) {
            for (let j=0; j<code_text.length; j++){
               let k= n-65;
                if(k==j){
                code_text1 = code_text1.concat(code_text[k]);}
            }

        }
        else if ((n >= 97 && n <= 122)) {
            for (let j=0; j<code_text.length; j++){
               let q= n-97;
                if(q==j){
                code_text1 = code_text1.concat(code_text[j].toLowerCase());}
            }
        }
        else code_text1 = code_text1.concat(main_text[i]);
    }
    return code_text1
}


var atbash = function (main_text) {

    var main_text = shifrInAtbash(main_text);
    return main_text;
}
module.exports=atbash;



