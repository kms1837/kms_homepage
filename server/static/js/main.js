$(document).ready(function() {
    $.get('http://kms-net-test-kms1837.c9users.io/ruliweblog', function(data) {
       $('#ruliweb_time').text(data);
    });
    
    var timer = setInterval(timerEventHander, 1000);
    
    var d_day = new Date('July 25, 2017');
    
    $('.leftSide ul li').click(function(data) {
        var select_manu = $(data.target).attr('id');
        var change_page_url;
        
        switch (select_manu) {
            case 'menu1':
                change_page_url = 'board.html';
                break;
            case 'menu2':
                change_page_url = 'question';
                break;
            case 'menu3':
                change_page_url = 'chat.html';
                break;
        }
        
        $('.leftSide ul .select').removeClass();
        $(data.target).addClass('select');
        $.get(change_page_url, function(data) {
            $('.content').html(data);
        });
    })
    
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
    
    
    $(document).on('click', '.edit_question', function(data) {
      
    });
});