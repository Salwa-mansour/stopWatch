let [seconds,mintes,hours]=[0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;
function stopwatch(){
    seconds++;
    if(seconds ==60){
        seconds=0;
        mintes++;
        if(mintes == 60){
            mintes = 0;
            hours++
        }
    }
    // contcatnate text with zero for better look
    let h = hours <10 ? "0" + hours :hours;
    let m = mintes <10 ? "0" + mintes :mintes;
    let s = seconds <10 ? "0" + seconds :seconds;

    displayTime.innerHTML = `${h}:${m}:${s}`
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer)
    }
   timer= setInterval(stopwatch,1000);
}
function watchStop(){
    clearInterval(timer); 
}
function watchReset(){
    clearInterval(timer); 
    [seconds,mintes,hours]=[0,0,0];
    displayTime.innerHTML ="00:00:00"
}