var fs = require("fs");

console.log(isInList("abcd"));

//console.log(generateCodeFromName(4, "testing"));

function run(length, name) {
    //Generates Code
    var code;
    var compliant = false;
    while(compliant != true) {
        code = generateCodeFromName(4, "Alpha Test");

        //Checks for compliance
        if(hasOneNumber(code) && !isInList(code)) 
            compliant = true;
    }
    //Returns if good
}



function generateCodeFromName(length, name) {
    //Generates Alphanumeric Code
    var y = Math.random().toString(36).replace('0.', '');
    //Trims code to length needed
    y = y.substring(0, length-1);
    
    //Grabs first letter of Location Name to add into code. 
    var q = name.substring(0, 1).toUpperCase();

    //Combines first letter of location and generated code. 
    q = q + y;

    //Runs checks against code for validation
    console.log(hasOneNumber(q));


    return q;
}


//check to see if code contains 1 number;
function hasOneNumber(str) {
    return /\d/.test(str);
  }

//check to see if code is in list;
function isInList(str) {
    var text = fs.readFileSync("./code-list.txt").toString('utf-8');
    var textByLine = text.split("\n")

    if(textByLine.indexOf(str) != -1) 
        return true;
    
    return false;
}



// function generateCode(length) {
//     var y;
//     y = Math.random().toString(36).replace('0.', '');
//     y = y.substring(0, length);
//     return y;
// }