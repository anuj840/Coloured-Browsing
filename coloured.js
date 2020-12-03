var q = document.querySelectorAll(".rc");

for(var i=0;i<q.length;i++)
  {
    q[i].style.background = "rgb("+(Math.floor(Math.random()*256)%50+150)+", "+(Math.floor(Math.random()*256)%50+150)+", "+(Math.floor(Math.random()*256)%50+150)+")"
    q[i].style.borderRadius = "8px";
    q[i].style.padding = "8px";
  }

if(document.querySelector("body"))
  document.querySelector("body").style.background = "LightSalmon"
if(document.getElementById("appbar"))
  document.getElementById("appbar").style.background = "lightgreen"
if(document.getElementById("hdtbSum"))
  document.getElementById("hdtbSum").style.background = "lightblue"
if(document.getElementsByClassName("sfbg")[0])
  document.getElementsByClassName("sfbg")[0].style.background = "lightblue"
if(document.getElementById("fbar"))
  document.getElementById("fbar").style.background = "lightblue"
var replyCount = document.getElementsByClassName("HqGB2c");
for(var i=0;i<replyCount.length;i++)
{
  replyCount[i].style.background = "greenyellow"
}
var moreInfo = document.getElementsByClassName("GHDvEf");
for(var i=0;i<moreInfo.length;i++)
{
  moreInfo[i].style.background = "orange";
}
var redd = document.querySelector(".reddd").value;
document.querySelector("h1").addEventListener("click",function(){
  redd = document.querySelector(".reddd").value;
  document.querySelector("body").style.background = redd;
  // alert("Hey")
});