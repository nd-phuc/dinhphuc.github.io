function startTimer() {
    /**
     New Year 2019 Countdown Timer
     Author: 5um17
     url: http://www.secretsofgeeks.com/2011/12/new-year-countdown-clock.html
    **/
    var newyr=new Date("January 25, 2020 00:00:00");
    var newyeartime=newyr.getTime();
    var todaytm=new Date();
    var todaytime=todaytm.getTime();
    var timeleft=newyeartime-todaytime;
    var leftdays = timeleft/86400000;
    var lefthr=23-todaytm.getHours();
    var leftmin=59-todaytm.getMinutes();
    var leftsec=59-todaytm.getSeconds();
    if (Math.floor(leftdays) <= -1) {
        document.getElementById('scg-nyc-msg').innerHTML="It's New Year Time, Friends!<br/>Happy New Year 2019";
        return;
    } else {
        document.getElementById('scg-clock-days').innerHTML= scgWrapChars(Math.floor(leftdays), -3);
        document.getElementById('scg-clock-hr').innerHTML= scgWrapChars(lefthr, -2);
        document.getElementById('scg-clock-mins').innerHTML= scgWrapChars(leftmin, -2);
        document.getElementById('scg-clock-secs').innerHTML= scgWrapChars(leftsec, -2);
    }
    setTimeout('startTimer()',999);
}
eval(atob('c3RhcnRUaW1lcigpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJzY2ctbnljLXdyYXBwZXIiKS5vbmNsaWNrPWZ1bmN0aW9uKCl7d2luZG93LmxvY2F0aW9uPSJodHRwOi8vd3d3LnNlY3JldHNvZmdlZWtzLmNvbS8yMDExLzEyL25ldy15ZWFyLWNvdW50ZG93bi1jbG9jay5odG1sP215cmVmPW55In0='));

/**
 * Wrap each word in span Ref: http://stackoverflow.com/a/15602535/2384623
 */
function scgWrapChars(str, pad) {
    str = (Math.pow(10, Math.abs(pad)) + str.toString()).slice(pad);
    return str.replace(/\w/g, "<span>$&</span>");
}