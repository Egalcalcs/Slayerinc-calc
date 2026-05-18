body{
margin:0;
font-family:Arial;
background:#070b14;
color:white;
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
overflow:hidden;
}

.bg{
position:absolute;
width:600px;
height:600px;
background:#00f5ff30;
filter:blur(120px);
border-radius:50%;
top:20%;
left:50%;
transform:translateX(-50%);
}

.app{
position:relative;
width:90%;
max-width:1000px;
}

h1{
text-align:center;
color:#38bdf8;
text-shadow:0 0 20px #38bdf8;
margin-bottom:20px;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.panel{
background:rgba(15,23,42,0.85);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:25px;
backdrop-filter:blur(10px);
}

h2{
color:#22d3ee;
}

label{
display:block;
margin-top:10px;
color:#94a3b8;
}

input,select{
width:100%;
padding:12px;
margin-top:6px;
border:none;
border-radius:10px;
background:#0b1220;
color:white;
}

.inline{
display:flex;
gap:10px;
}

button{
width:100%;
margin-top:15px;
padding:12px;
border:none;
border-radius:12px;
background:#22d3ee;
font-weight:bold;
cursor:pointer;
}

button:hover{
background:#0ea5e9;
}

#out{
margin-top:10px;
font-size:18px;
line-height:1.8;
}
