/* function isJavaScriptFile (fileName) {
    if(typeof fileName !== "string") {
        return "Please provide me a valid file name (string)";
    }
    else{
        if(fileName.toLowerCase().endsWith(".js") === true) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(isJavaScriptFile("hello.JS")); */


// Another Way   -------------------------------------------


function isJavaScriptFile(fileName) {
    if(typeof fileName !== "string") {
        return "please provide me a valid file name (string)"
    }
}
