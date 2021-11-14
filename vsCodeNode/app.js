const fs = require("fs");

const arg = process.argv;



var C = require('./shifr_cezar');
var A = require('./shifr_atbash');
var R = require('./shifr_ROT13');




let er = Boolean(1);
let check_config;
let config = "";
let check_input;
let input = "";
let check_output;
let output = "";

var config_part_array = [100][100];

for (let i = 2; i < arg.length; i++) {

    if (arg[i].toLowerCase() == '-c' || arg[i].toLowerCase() == '-config') {
        check_config = arg[i].toLowerCase();
        config = config.concat(arg[i + 1]);
        config=config.split(" ")
    }
    else if (arg[i].toLowerCase() == '-i' || arg[i].toLowerCase() == '-input') {
        check_input = arg[i].toLowerCase();
        input = input.concat(arg[i + 1]);
        input=input.split(" ")
    }
    else if (arg[i].toLowerCase() == '-o' || arg[i].toLowerCase() == '-output') {
        check_output = arg[i].toLowerCase();
        output = output.concat(arg[i + 1]);
        output=output.split(" ")

    }
    // else if (arg[i].toLowerCase() != '-c' || arg[i].toLowerCase() != '-config'){
    //     console.log("Ваш консольный ввод не содержит config опции")
    //     er=0;
    //     break;
    // }


}
var readFile = fs.readFileSync(input, 'utf-8', function(error){
    if(error)
    {console.log(`Взаимодействие с ${input} папкой не удалась!(Попробуйте ввести другую папку или проверьте адрес  ссылки)`)
er=0;
}
});

if (arg.length > 8) {
    console.log("Слишком много значений!");
    er = 0;
}




var readFile = fs.readFileSync(input, 'utf-8');




var text1 = "";
var text1 = text1.concat(readFile)

    
    
if (er == 1) {

    var config_array = config.split("-");
   

    for (let i = 0; i < config_array.length; i++) {
    var config_part_array = config_array[i].split("");
    var text = "";
    var text = text.concat(config_part_array[0]);

    if (text.toLowerCase() == 'c') {
        var tex = C(text1, +config_part_array[1])

        text1 = text1.replace(text1, tex);

    }
    else if (text.toLowerCase() == 'r') {
        var tex = R(text1, +config_part_array[1])

        text1 = text1.replace(text1, tex);

    }
    else if (text.toLowerCase() == 'a') {
        var tex = A(text1)

        text1 = text1.replace(text1, tex);
    }
    else {
        console.log(`В ${config} тексте содержатся не зафиксированные доступы к кодировкам!`)
        er = 0;
         break;
    }
     }
}

var lastFive = text1.substr(text1.length - readFile.length);

fs.writeFileSync(output, lastFive, function(error){
    if(error){
        console.log(`Взаимодействие с ${output} папкой не удалась!(Попробуйте ввести другую папку или проверьте адрес  ссылки)`);
        er=0;
}
});
