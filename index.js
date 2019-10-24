const findWord = require("./findWord");
const args = process.argv.slice(2);

//test
//localhost
//returns 1 instance found when no arguments passed

findWord(args[0], args[1]);
