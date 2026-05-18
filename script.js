body{
margin:0;
font-family:Arial;
background:linear-gradient(120deg,#0b1220,#111827);
color:white;
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
}

.container{
width:90%;
max-width:1000px;
}

h1{
text-align:center;
color:#38bdf8;
text-shadow:0 0 10px #38bdf8;
margin-bottom:20px;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.card{
background:#0f172a;
padding:20px;
border-radius:15px;
box-shadow:0 0 25px rgba(0,0,0,0.6);
}

h2{
color:#22d3ee;
}

input, select{
padding:10px;
margin:10px 0;
border:none;
border-radius:8px;
background:#020617;
color:white;
width:100%;
}

.row{
display:flex;
gap:10px;
}

.row input{
flex:2;
}

.row select{
flex:1;
}

button{
width:100%;
padding:12px;
border:none;
border-radius:10px;
background:#22d3ee;
font-weight:bold;
cursor:pointer;
}

button:hover{
background:#0ea5e9;
}

#result{
font-size:18px;
line-height:1.8;
}
