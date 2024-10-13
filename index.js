import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message: "Enter your URL here:",
    name: "URL"
  }
   
  ])
  .then((answers) => {
    
    const url= answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
     
    }
  });
   