try{if(!document.getElementById("zc-rm-loader")){var zc=document.createElement("script");zc.id="zc-rm-loader";zc.src="js/ritual-matrix.js";document.documentElement.appendChild(zc)}}catch(e){}
const A=window.Aegis;let S=A&&A.load?A.load():{family:[],nodes:[],circuits:[],feed:[],watch:{ticks:0,decoys:0},chain:"GENESIS"};
if(!S.family||!S.family.length){S.family=[{name:"HRH Saint Tariro Masawi",rel:"Self",consent:true},{name:"HRH Tarry Kupakwashe Masawi",rel:"Spouse",consent:true},{name:"House of Masawi",rel:"House",consent:true}]}
const map=document.getElementById("map");
if(!map){/* SQIE v2 index has no canvas map; keep ritual extra-only */}
else{
const ctx=map.getContext("2d");let packets=[];
function size(){map.width=map.clientWidth*devicePixelRatio;map.height=map.clientHeight*devicePixelRatio}
function pos(n){return{x:n.x*map.width,y:n.y*map.height}}
function draw(){if(!ctx)return;size();ctx.clearRect(0,0,map.width,map.height)}
function paint(){draw()}
fetch("./data/aegis-state.json").catch(function(){});
if("serviceWorker"in navigator)navigator.serviceWorker.register("./sw.js").catch(function(){});
}
