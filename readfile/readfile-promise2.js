const fs = require("fs");

function getReadfilePromis(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        //錯誤了
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

  getReadfilePromis("test.txt")
  .then((result) => {
    console.log(`resolved: ${result}`);
  }).catch((error) => {
    console.error(error);
  });

  getReadfilePromis("test1111.txt")
  .then((result) => {
    console.log(`resolved: ${result}`);
  }).catch((error) => {
    console.error(error);
  });
