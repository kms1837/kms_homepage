$(document).ready(function() {
    $.get('/ruliweblog', function(data) {
       $('#ruliweb_time').text(data);
    });
    
    var timer = setInterval(timerEventHander, 1000);
    
    var d_day = new Date('July 25, 2017');
    
    function timerEventHander() {
        var now = new Date();
        var gap = now.getTime() - d_day.getTime();
        var d = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
        var h = Math.floor((gap/(1000*60*60)) % 24) * -1;
        var m = Math.floor((gap/(1000*60)) % 60) * -1;
        var s = Math.floor((gap/1000) % 60) * -1;
        
        if(m < 10) m = '0' + m;
        if(s < 10) s = '0' + s;
        
        $('#army_dday').text(d);
        $('#army_time').text('(' + h + ':' + m + ':' + s + ')');
    }
});