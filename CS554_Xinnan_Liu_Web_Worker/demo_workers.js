var i=60;   

function timedCount()
{

i=i-1;

postMessage(i);
  //  localStorage.setItem("counter",i);
setTimeout("timedCount()",500);
   
}

timedCount();