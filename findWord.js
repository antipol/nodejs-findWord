module.exports = (
  searchWord = "localhost",
  relativePathToFile = "./index.js"
) => {
  const fs = require("fs");
  const streamRead = fs.createReadStream(relativePathToFile, "utf8");
  //number of chunks, initially 0 chunks read
  let chunkNum = 0;
  // num of findWord instances
  let wordCount = 0;

  streamRead.on("data", chunk => {
    //increment chunkNum for each chunk and log current chunkNum
    chunkNum++;
    console.log(`Reading chunk ${chunkNum}`);

    //loop through each character in each chunk
    for (let i = 0; i < chunk.length; i++) {
      //checks current letter + searchWord.length ahead to check if it matches searchWord
      if (chunk.substring(i, i + searchWord.length) === searchWord)
        //if match, increment wordCount
        wordCount++;
    }
  });

  //at the end of streaming, log info about search
  streamRead.on("end", () => {
    console.log("End of data");
    console.log(`Searched file: ${relativePathToFile}`);
    console.log(`Number of chunks: ${chunkNum}`);
    console.log(`Found "${searchWord}" ${wordCount} times`);
  });
};
