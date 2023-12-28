// all imports
const path = require("path");
const fs = require("fs");

// information from command line
const [, , operation, filename, oldRename, newRename,...content] = process.argv;

//default for empty input
if (!operation || !filename) {
  console.log("Usage : node index.js <operation> <filename> [content]");
  process.exit(1);
}

switch (operation) {
  case "read":
    readFile(filename);
    break;
  case "delete":
    deleteFile(filename);
    break;
  case "create":
    createFile(filename, content.join(" "));
    break;
  case "rename":
    renameFile(oldRename,newRename);
    break;
  case "append":
    appendFile(filename, content.join(" "));
    break;
  case "list":
    listDirectory(filename || ".");
    break;
  default:
    console.log(
      "Invaild Operation : Only read , delete, rename , append, create works!!"
    );
}

function readFile(filename) {
  fs.readFile(filename, (data, error) => {
    if (error) {
      console.error(`error reading file: ${error}`);
    } else {
      console.log(`file content:${data}`);
    }
  });
}

function deleteFile(filename) {
  // unlink is used for deleting file
  fs.unlink(filename, (error) => {
    if (error) console.error(`Error in delete File : ${filename}`);
    else {
      console.log(`file ${filename} has been successfully deleted`);
    }
  });
}

function createFile(filename, fileContent) {
  // writeFile is used for creating file
  fs.writeFile(filename, fileContent, (error) => {
    if (error) console.error(`Error in creating File : ${filename}`);
    else {
      console.log(`file ${filename} has been successfully created`);
    }
  });
}

function appendFile(filename, content) {
  // appendFile is used for deleting file
  fs.appendFile(filename, content, (error) => {
    if (error) console.error(`Error in appending File : ${filename}`);
    else {
      console.log(`file ${filename} has been successfully appended`);
    }
  });
}

function renameFile(oldRename, newRename) {
  // rename is used for renaming file
  if (!newRename || typeof newRename !== "string") {
    console.error("Error: Invalid or missing new file name.");
    return;
  }
  fs.rename(oldRename, newRename, (error) => {
    if (error) {
      if (error.code === "ENOENT") {
        console.error(`Error: File "${oldRename}" not found.`);
      } else {
        console.error(`Error in renaming File: ${error.message}`);
      }
    } else {
      console.log(
        `file ${oldRename} has been successfully renamed to file ${newRename}`
      );
    }
  });
}

function listDirectory(directory) {
  fs.readdir(directory, (error, files) => {
    if (error) console.error(`error has been  detected at reading  dir`);
    else {
      console.log(`Files in directory "${directory}":`);
      files.forEach((file) => console.log(file));
    }
  });
}
