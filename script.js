function formatTime(seconds){

let min = seconds / 60;
let hour = min / 60;
let day = hour / 24;

if(day >= 1) return day.toFixed(2) + " days";
if(hour >= 1) return hour.toFixed(2) + " hours";
if(min >= 1) return min.toFixed(2) + " minutes";

return seconds.toFixed(2) + " seconds";
}

function xpNeeded(level){
return 100 * Math.pow(1.2, level);
}

function calculate(){

let level = parseFloat(document.getElementById("level").value);
let target = parseFloat(document.getElementById("target").value);
let xphit = parseFloat(document.getElementById("xphit").value);
let multi = parseFloat(document.getElementById("multiplier").value);

// total XP needed
let totalXP = 0;

for(let i = level; i < target; i++){
totalXP += xpNeeded(i);
}

// XP per hit with multiplier
let xpPerHit = xphit * multi;

// hits needed
let hits = totalXP / xpPerHit;

// assume attack speed 0.8/sec
let attacksPerSec = 0.8;

let seconds = hits / attacksPerSec;

document.getElementById("result").innerHTML = `
<b>Total XP:</b> ${totalXP.toExponential(2)}<br>
<b>XP per Hit:</b> ${xpPerHit.toLocaleString()}<br>
<b>Hits Needed:</b> ${hits.toFixed(0)}<br><br>
<b>Time Needed:</b> ${formatTime(seconds)}
`;
}
