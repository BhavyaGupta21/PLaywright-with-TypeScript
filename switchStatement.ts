// switch (key) {
//     case value1:
//         // Code to be executed if key === value1
//         break;
//     case value2:
//         // Code to be executed if key === value2
//         break;
//     // Additional cases as needed
//     default:
//         // Code to be executed if none of the cases match
//         break;
// }

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Weekend";
}

console.log(`It's ${dayName}!`)