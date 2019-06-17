var fs = require("fs");

//Run Code
generateCodeToList(4, "<Insert Name Here>");

function generateCodeToList(length, name) {
    console.log("Running... \nGenerating Code for " + name);
    //Generates Code
    var code;
    var compliant = false;
    while(compliant != true) {
        code = generateCodeFromName(length, name);

        //Checks for compliance
        if(hasOneNumber(code) && !isInList(code)) 
            compliant = true;
    }

    //Adds to List if Compliant
    fs.appendFile("./code-list.txt", "\n" + code, (err) => {
        if (err) throw err; 
        console.log("The list was updated with: " + code);
    });
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

    return q;
}


//******************* VALIDATIONS ******************************

//check to see if code contains at least 1 number;
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