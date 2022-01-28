function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }

    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    am.innerHTML = am_pm;
}
setInterval(clock,1000);



function Makediv(){

    var container=document.createElement('div');
    container.className="grid-item";
    container.id="display-block";


    document.getElementById("grid-container").appendChild(container);

    var invalue = document.getElementById("wakeup-time-selector");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div21").innerHTML="Wake up Time : " + value;


    var invalue = document.getElementById("lunch-time-selector");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div22").innerHTML="Lunch Time : " + value;

    var invalue = document.getElementById("nap-time-selector");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div23").innerHTML="Nap Time : " + value;

}


function settime(){

    var i=document.getElementById('wakeup-time-selector').value;
    var j = document.getElementById("lunch-time-selector").value;
    var z = document.getElementById("nap-time-selector").value;
    var hourr = new Date().getHours();

    if(i==hourr){

        document.getElementById('img-container').style.backgroundImage="url(./images/wakeup.PNG)"
        document.getElementById('text-container').innerHTML='Wake Up !!';
        document.getElementById("text-display").innerHTML="Good Morning !!";
    }

    if(j==hourr){
        document.getElementById("img-container").style.backgroundImage="url(./images/lunch.PNG)"
        document.getElementById("text-container").innerHTML="Let's Have Some Lunch !!";
        document.getElementById("text-display").innerHTML="Good Afternoon !!";
    }

    if(z==hourr){
        document.getElementById("img-container").style.backgroundImage="url(./images/night.PNG)"
        document.getElementById("text-container").innerHTML="Good Night !!";
        document.getElementById("text-display").innerHTML="Good Night !!";
    }    
    
    Makediv();
}
