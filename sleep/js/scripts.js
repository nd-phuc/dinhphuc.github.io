(function ($) {
    $(window).on('load', function () {
        $('.fade-in').css({ position: 'relative', opacity: 0, top: -14 });
        setTimeout(
            function () {
                $('#preload-content').fadeOut(400, function () {
                    $('#preload').fadeOut(800);
                    setTimeout(
                        function () {
                            $('.fade-in').each(function (index) {
                                $(this).delay(400 * index).animate({ top: 0, opacity: 1 }, 800);
                            });
                        },
                        800
                    );
                });
            },
            400
        );
    });


    function changeBackgroundAndTitle() {
        var today = new Date();
        var hours = today.getHours();

        var shift = "";
        var title = "";
        if (hours >= 0 && hours < 4) {
            shift = "night";
            title = "Muộn rồi đó bạn </br/> Ngủ đi nào";
        }else if (hours >= 4 && hours < 11) {
            shift = "morning";
            title = "Dậy thôi giờ này thì không ai ngủ nữa";
        } else if (hours >= 11 && hours < 14) {
            shift = "noon";
            title = "Buổi trưa thì nghỉ ngơi một tí thôi";
        } else if (hours >= 14 && hours < 18) {
            shift = "afternoon";
            title = "Buổi chiều cố mà tập trung cho đỡ buồn ngủ";
        } else if (hours >= 18 && hours <= 23) {
            shift = "night";
            title = "Một ngày vất vả rồi <br/> Ngủ thôi nào";
        }
        var url = "https://source.unsplash.com/1600x900/?" + shift;


        var arrImg =[];
        for (let index = 0; index < 30; index++) {
            arrImg.push(url+'-'+index);
        }  
        $.backstretch(arrImg, {duration: 5000, fade: 1000});
        
        ///
        $('.section-title').html(title);
    }


    

    

    $(document).ready(function () {

        // Modal
        $('#modal-open, #modal-close').on('click', function (e) {
            $('body').toggleClass('modal--opened');
            e.preventDefault();
            $.backstretch('resize');
        });
        changeBackgroundAndTitle(); 
       
    });
})(jQuery);
