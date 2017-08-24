let fs = require('fs');
//  The readappend is a user defined function to merge 2 files.
//  The 2nd file is merged into the first file.
let ReadAppend = function (file, file2) {
  //  The file data is read
  fs.readFile(file2, function(err, data) {
    if (err) {
      //  If at all any error occurs during the read operation
      //  Error is thrown and the file is not read.
      throw err;
    }
    //  The file data has to be appended into file 1.
    fs.appendFile(file, data, function(er) {
      if (er) {
        //  If at all any error occurs during the append operation
        //  Error is thrown and the file is not appended.
        throw er;
      }
    });
  });
// console.log('Files Merged Successfully');
};
//  The value or location of files is given
let out = './inputdata/IndiaMerge2.csv';
let file = './inputdata/India2011.csv';
let file2 = './inputdata/IndiaST2011.csv';
let file3 = './inputdata/IndiaSC2011.csv';

//  Calling the function thrice to add data to output file.
ReadAppend(out, file);
ReadAppend(out, file2);
ReadAppend(out, file3);

//  We have to export the function if at all any call is made from outside.
module.exports = ReadAppend;
