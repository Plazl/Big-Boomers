bombs = {
'1':1,
'2':5,
'3':10,
'4':15,
'5':20,
'6':25,
'7':30,
'8':35,
'9':40,
'10':45,
'11':50,
'12':55,
'13':60,
'14':65,
'15':70,
'16':75,
'17':80,
'18':85,
'19':90,
'20':95,
'21':100,
'22':125,
'23':150,
'24':175,
'25':200,
'26':225,
'27':250,
'28':275,
'29':300,
'30':325,
'31':350,
'32':375,
'33':400,
'34':425,
'35':450,
'36':475,
'37':500,
'38':525,
'39':550,
'40':575,
'41':600,
'42':625,
'43':650,
'44':675,
'45':700,
'46':725,
'47':750,
'48':775,
'49':800,
'50':825,
'51':850,
'52':875,
'53':900,
'54':925,
'55':950,
'56':975,
'57':1000
};
bombYeild = {};
population = 8000000000;
contPop = {
"NA":579000000,
"SA":422500000,
"Asia":45610000,
"Europe":746400000,
"Africa":1216000000
};
countPop = {};
upgrades = {};
deaths;
var game = {
 "bombs":bombs,
 "bombYeild":bombYeild,
 "population":population,
 "upgrades":upgrades,
 "deaths":deaths,
 "contPop":contPop,
 "countPop":countPop
}
delete bombs;
delete bombYeild;
delete population;
delete deaths;
delete contPop;
delete countPop;
function dropBomb() {
     var Y0 = Number(document.getElementById("selBomb").value);  
     var duration = Math.pow(Y0,0.45)*0.2;
     var dur = duration.toFixed(1);
     var firballmin = (Math.pow(Y0,0.4)*90)*0.3048;
     var frmin = firballmin.toFixed(1);
		   var firballair = (Math.pow(Y0,0.4)*110)*0.3048;
     var frair = firballair.toFixed(1);
		   var firballground = (Math.pow(Y0,0.4)*145)*0.3048;
     var frground = firballground.toFixed(1);
     var Height = (Math.pow(Y0,0.4)*180)*0.3048;
     var h = Height.toFixed(1);
    setTimeout(function() wait{}
}
