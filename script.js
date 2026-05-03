const fs=require("fs");

fs.copyFile("Output.txt","./CopyFile/copyfile.txt",function(err){
    if (err) {
        console.log(err);
    }else
        console.log("done ");
}
)