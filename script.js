// =====================
// FORMAT LARGE NUMBERS
// =====================
function format(num) {
    const units = ["", "K", "M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "No"];
    let i = 0;

    while (num >= 1000 && i < units.length - 1) {
        num /= 1000;
        i++;
    }

    return num.toFixed(2).replace(/\.00$/, "") + units[i];
}

// =====================
// PARSE K/M/B INPUT
// =====================
function parseShortNumber(str) {
    if (!str) return 0;

    str = str.toUpperCase().replace(/,/g, "");

    const suffixes = {
        K: 1e3,
        M: 1e6,
        B: 1e9,
        T: 1e12,
        QA: 1e15,
        QN: 1e18
    };

    let match = str.match(/([0-9.]+)([A-Z]*)/);
    if (!match) return Number(str);

    let value = parseFloat(match[1]);
    let suffix = match[2];

    return value * (suffixes[suffix] || 1);
}

// =====================
// XP SYSTEM (x1.2 scaling)
// =====================
function xpNeeded(level) {
    let xp = 0;
    let current = 100;

    for (let i = 1; i <= level; i++) {
        xp += current;
        current *= 1.2;
    }

    return xp;
}

// =====================
// ATTACK SPEED SYSTEM
// =====================
function baseSpeed() {
    return 0.8;
}

function grinderBoost(level) {
    return 1 + level * 0.05;
}

function totalSpeed(grinderLevel) {
    return baseSpeed() * grinderBoost(grinderLevel);
}

// =====================
// TIME FORMATTER
// =====================
function formatTime(seconds) {
    if (seconds < 60) return seconds.toFixed(0) + " sec";

    let minutes = seconds / 60;
    if (minutes < 60) return minutes.toFixed(2) + " min";

    let hours = minutes / 60;
    if (hours < 24) return hours.toFixed(2) + " h";

    let days = hours / 24;
    return days.toFixed(2) + " days";
}

// =====================
// MAIN CALCULATOR
// =====================
function calc() {
    let level = Number(document.getElementById("level").value);
    let xpPerHitRaw = document.getElementById("xp").value;
    let grinder = Number(document.getElementById("grinder").value);

    let xpPerHit = parseShortNumber(xpPerHitRaw);

    if (!level || !xpPerHit) {
        document.getElementById("result").innerText = "Please enter all values.";
        return;
    }

    let totalXP = xpNeeded(level);
    let hits = totalXP / xpPerHit;

    let speed = totalSpeed(grinder);
    let timeSeconds = hits / speed;

    document.getElementById("result").innerText =
        "Total XP: " + format(totalXP) +
        "\nHits needed: " + format(hits) +
        "\nTime: " + formatTime(timeSeconds);
}
