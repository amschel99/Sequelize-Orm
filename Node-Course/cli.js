const userName=process.argv[2]
const path=require("path")

if(!userName){
    const appname=process.argv[1].split(path.sep).pop()
    console.error("Error!! missing argument, Example: %s yourName",appname)
    process.exit(1)
}
console.log('Hello %s!', userName);

