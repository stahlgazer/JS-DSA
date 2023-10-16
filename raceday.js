let raceNumber = Math.floor(Math.random() * 1000);
let registered = true;
let runnerAge = 18;

if (registered && runnerAge > 18) {
  raceNumber += 1000
}

if (runnerAge > 18 && registered) {
  console.log(`Early adults run at 9:30 am. race number: ${raceNumber}`)
} else if (runnerAge > 18 && !registered) {
  console.log(`Late adults run at 11:00 am. race number: ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm. race number: ${raceNumber}`)
} else if (runnerAge === 18) {
  console.log(`See the registration desk.`)
}

