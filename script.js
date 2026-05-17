// =====================
// FORMAT (K M B T ...)
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
// XP SYSTEM (×1.2 per level)
// =====================
function xpNeeded(level) {
    let xp = 0;
    let current = 100;

    for (let i = 1; i <= level; i++) {
        xp += current;
        current *= 1.2;
    }

    return Math.floor(xp);
}

// =====================
// ATTACK SPEED
// =====================
function baseSpeed() {
    return 0.8; // hits per second
}

// 🔥 Stage Grinder Boost (EDITABLE)
function grinderBoost(level) {
    return 1 + level * 0.05; // placeholder formula
}

function totalSpeed(grinderLevel) {
    return baseSpeed() * grinderBoost(grinderLevel);
}

// =====================
// CALCULATOR
// =====================
function calc() {
    let level = Number(document.getElementById("level").value);
    let xp = Number(document.getElementById("xp").value);
    let grinder = Number(document.getElementById("grinder").value);

    if (!level || !xp) {
        document.getElementById("result").innerText = "Bitte alle Werte eingeben.";
        return;
    }

    let totalXP = xpNeeded(level);
    let hits = totalXP / xp;

    let speed = totalSpeed(grinder);
    let time = hits / speed;

    document.getElementById("result").innerText =
        "XP benötigt: " + format(totalXP) +
        "\nHits: " + format(hits) +
        "\nZeit: " + Math.floor(time) + "s";
}
