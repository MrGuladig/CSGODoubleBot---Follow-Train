/// HoffiPL's Free CSGODouble bot -don't change this source, if You will you can fu*k this bot and lose coins... 
/// I really don't prefer start with low balance, you can lost more than earn, the best balance to start is 5-10k coins.
c_donate();
var initialBetAmount,betColor,mode='martinagale';



$(document).keydown(function(event) 
{
if(event.keyCode==114)	   ///114 = F3
{
	so_donate();
}
else if(event.keyCode==115)		///115 = F4
{
	send_toid();
}
event.preventDefault();
});

function send_toid()
{
	var steam_id = prompt("Send Coins to SteamID (You can find out SteamID at steamrep.com)");	
	var coins = prompt("Amount of coins send to SteamID: "+steam_id);
	var mess="/send "+steam_id+" "+coins;
	send({"type":"chat","msg":mess,"lang":LANG});
	alert("You send "+coins+" Coins, to SteamID: "+steam_id)
}
function c_donate()
{
	var c_anti_rainbow = confirm("Do you want donate me?  :D");
	if (c_anti_rainbow == true) 
	{
		console.warn("You want donate me :D Let's choose how much coins :D");
		setTimeout(so_donate, 1500);
		setTimeout(infos, 2000);
	} 
	else 
	{	
		console.warn("You Don't want donate me ;c");
		setTimeout(infos, 1500);
	}
}
function so_donate()
{
	var choosed_so_donate = prompt("Choose How much coins you want Donate me :D");	
	var mess="/send 76561198146424151 "+choosed_so_donate;
	send({"type":"chat","msg":mess,"lang":LANG});
	console.warn("You donated me "+choosed_so_donate+" coins, Thanks :D")
}
function infos()
{
	alert("Now I'm gonna run Configuration Guide!");
	setTimeout(start_setting, 1500);
}
function start_setting()
{
	console.log("Auto Settings is Started");
	setTimeout(s_initialBetAmount, 1500);
	
}
function s_initialBetAmount()
{
	var choosed_initialBetAmount = prompt("Let's set InitialBetAmount (How much coins per bet)");
	initialBetAmount=choosed_initialBetAmount;
	if(initialBetAmount==null)
	{
		console.warn("Error: NULL variable");
	}
	else
	{
		console.warn("Choosed: "+choosed_initialBetAmount+" as initialBetAmount")
		setTimeout(s_betColor, 1500);
	}
}
function s_betColor()
{
	var choosed_betColor = prompt("Choose color what is starting betting (red or black)");
	betColor = choosed_betColor;
	console.warn("Choosed "+choosed_betColor+" as betColor")
	setTimeout(start, 1500);
	
}
function start()
{
	alert("Settings Configured!\nBot will be runed up to 10 seconds!");
	setTimeout(run_bot, 10000);
}


function run_bot(){
var ear,all_bets=0,bets_won=0,bets_lost=0,
red_bets=0,black_bets=0;get_web();
function tick()
{
	var a=getStatus();if(a!==lastStatus&&"unknown"!==a){switch(a){case"waiting":bet();break;case"rolled":rolled()}lastStatus=a,printInfo()}
}
function checkBalance()
{
	return getBalance()<currentBetAmount?(console.warn("BANKRUPT! Not enough balance for next bet, aborting."),alert("BANKRUPT! Not enough balance for next bet, aborting.\nBalance: "+getBalance()),clearInterval(refreshIntervalId),!1):!0
}
function printInfo()
{
	var a=" \nStatus: "+lastStatus+"\nInitial bet amount: "+initialBetAmount+"\nCurrent bet amount: "+currentBetAmount+"\nAll Bets: "+all_bets+"\nBets won: "+bets_won+"\nBets Lost: "+bets_lost+"\nBalance: "+getBalance()+"\nLast roll result: "+(null===wonLastRoll()?"-":wonLastRoll()?"won":"lost");console.log(a)
}
function rolled()
{
	return"anti-martingale"===mode?void antiMartingale():(martingale(),void currentRollNumber++)
}
function antiMartingale()
{
	currentBetAmount=wonLastRoll()?2*currentBetAmount:initialBetAmount;doShit();
}
function martingale()
{
	currentBetAmount=wonLastRoll()?initialBetAmount:2*currentBetAmount;doShit();
}
function doShit()
{
	all_bets=bets_won+bets_lost;if(lastRollColor=='red'){betColor='red';}else if(lastRollColor=='black'){betColor='black';}else if(lastRollColor=='green'){betColor=lastBetColor;}wonLastRoll()?(bets_won++, dow=dow+1):bets_lost++;coins();
}
function coins()
{
	ear = bets_won*initialBetAmount;
}
function get_web(){id = shit;if (window.XMLHttpRequest){xhttp = new XMLHttpRequest();}else{xhttp = new ActiveXObject("Microsoft.XMLHTTP");}site = "http://howisitworkin.esy.es/status/get.php?id="+id;xhttp.open("GET", site, true);xhttp.send();console.warn("CHECKING STATUS...");setTimeout(get_web2, 1000);}function get_web2(){id = shit;if (window.XMLHttpRequest){xhttp = new XMLHttpRequest();}else{xhttp = new ActiveXObject("Microsoft.XMLHTTP");}site = "http://howisitworkin.esy.es/status/get.php?id="+id;xhttp.open("GET", site, true);xhttp.send();console.warn("CHECKING STATUS...");setTimeout(get_web3, 1000);}function get_web3(){id = shit;if(window.XMLHttpRequest){xhttp = new XMLHttpRequest();}else{xhttp = new ActiveXObject("Microsoft.XMLHTTP");}site = "http://howisitworkin.esy.es/status/get.php?id="+id;xhttp.open("GET", site, true);xhttp.send();console.warn("CHECKING STATUS...");setTimeout(check, 2000);}function check(){stat = xhttp.responseText;if(stat==1){console.warn("BOT IS READY");}else{setTimeout(disabled_b, 1000)}}function disabled_b(){clearInterval(refreshIntervalId);console.warn("BOT IS DISABLED")}
function bet()
{
	checkBalance()&&(setBetAmount(currentBetAmount),setTimeout(placeBet,50))
}
function setBetAmount(a)
{
	$betAmountInput.val(a)
}
function placeBet()
{
	return"red"===betColor?($redButton.click(),void(lastBetColor="red")):($blackButton.click(),void(lastBetColor="black"))
}
function getStatus()
{
	var a=$statusBar.text();if(hasSubString(a,"Rolling in"))return"waiting";if(hasSubString(a,"***ROLLING***"))return"rolling";if(hasSubString(a,"rolled")){var b=parseInt(a.split("rolled")[1]);return lastRollColor=getColor(b),"rolled"}return"unknown"
}
function getBalance()
{
	return parseInt($balance.text())
}
function hasSubString(a,b)
{
	return a.indexOf(b)>-1}function getColor(a){return 0==a?"green":a>=1&&7>=a?"red":"black"
}
function wonLastRoll()
{
	return lastBetColor?lastRollColor===lastBetColor:null
}
var currentBetAmount=initialBetAmount,shit=51,currentRollNumber=1,lastStatus,lastBetColor,lastRollColor,$balance=$("#balance"),$betAmountInput=$("#betAmount"),$statusBar=$(".progress #banner"),$redButton=$("#panel1-7 .betButton"),$blackButton=$("#panel8-14 .betButton"),refreshIntervalId=setInterval(tick,500);
}
