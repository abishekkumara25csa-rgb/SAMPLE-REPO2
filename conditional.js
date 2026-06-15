console.log("Switch statement");
var signal = "white";
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Prepare to stop");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}

//do...while loop
console.log("do...while loop");
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

