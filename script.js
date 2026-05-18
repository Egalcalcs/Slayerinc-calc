function format(n){

let u=["","K","M","B","T","QD","QN","SX","SP","OC","NO"];

let t=Math.floor(Math.log10(Math.abs(n))/3);

if(t<=0) return n.toFixed(2);

return (n/Math.pow(1000,t)).toFixed(2)+u[t];
}

function xp(level){
return 100*Math.pow(1.2,level);
}

function atk(level){
return 0.8*Math.pow(1.0629,Math.min(level,20));
}

function time(sec){
let m=sec/60,h=m/60,d=h/24;
if(d>=1) return d.toFixed(2)+" days";
if(h>=1) return h.toFixed(2)+" hours";
if(m>=1) return m.toFixed(2)+" min";
return sec.toFixed(2)+" sec";
}

function calc(){

let l=+level.value;
let t=+target.value;
let hit=+xphit.value;
let mul=+xpMulti.value;

let total=0;
for(let i=l;i<t;i++) total+=xp(i);

let xpHit=hit*mul;
let speed=atk(l);

let sec=total/xpHit/speed;

out.innerHTML=`
XP Needed: <b>${format(total)}</b><br>
Attack Speed: <b>${speed.toFixed(3)}/s</b><br>
Time: <b>${time(sec)}</b>
`;
}
