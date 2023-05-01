const os = require("os");

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
const uptimeSeconds = os.uptime();

// convert uptime from seconds to minutes and hours
const uptimeMinutes = uptimeSeconds / 60;
const uptimeHours = uptimeMinutes / 60;
console.log(`The System Uptime is ${uptimeHours.toFixed(2)} hours`);

const currentOS = {
        name:os.type(),
        release:os.release(),
        totalMem: os.totalmem(),
        freeMem: os.freemem()
}
console.log(currentOS)