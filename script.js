function digitalClock(){
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let timeFormat = document.querySelector(".time p");
    
    timeFormat.innerHTML = (hours >= 12 ? 'PM' : "AM");

    hours = (hours == 0 ? 12: hours);
    hours = (hours > 12 ? hours - 12: hours);
    hours = (hours < 10 ? "0" + hours : hours);

    minutes = (minutes < 10 ? "0" + minutes : minutes);
    seconds = (seconds < 10 ? "0" + seconds : seconds);

    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;

    let todayDay = document.querySelector(`ul :nth-child(${day})`);
    todayDay.style.color = "#d13127";
    todayDay.style.fontWeight = "600";
};

setInterval(digitalClock, 1000);