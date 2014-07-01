(function($){

    $.fn.modal_box = function(prop){

        // Default parameters - Im not proud for this, I promess that i will refator when i had a chance

        var options = $.extend({
            height : "250",
            width : "500",
            content: "Example of how to create a modal box.",
            top: "20%",
            left: "30%",
            leftOffset: 0, 
            noClick: false /*it will just initialite the modal without wait for a click*/
        },prop);


        if(noClick) {
            add_block_page();
            add_popup_box();
            set_styles();
            $('.modal_box').fadeIn();
            return false;
        } else {
            return this.click(function(e){
                add_block_page();
                add_popup_box();
                set_styles();
    
                $('.modal_box').fadeIn();
                return false;
            });
        }
       
        function set_styles(){

            if(options.left == "centered") {
                options.left = '50%';
                options.leftOffset = '-' + (options.width/2) + 'px';
            }

            if(options.top.indexOf("%")) {
                options.top = options.top.replace("%","");
                options.topOffset = $(window).scrollTop() + ($( window ).height() * (options.top/100));

            } else {
                //I will assume that we got a simple value without the px suffix on it
                options.topOffset = window.scrollY + options.top;
            }

            $('.modal_box').css({
                'left': '50%',
                'margin-left': options.leftOffset,
                'top': options.topOffset + 'px',
                'height': 'auto',
                'max-height' : (window.innerHeight - 100) + 'px',
                'width': options.width + 'px'
            });

            /*Block page overlay*/
            var pageHeight = $(document).height();
            var pageWidth = $(window).width();

            $('.block_page').css({
                'height':pageHeight,
                'width':pageWidth
            });

        }

        function add_block_page(){
            var block_page = $('<div class="block_page"></div>');

            $(block_page).appendTo('body');
        }

        function add_popup_box(){
            var pop_up = $('<div class="modal_box"><a href="#" class="modal_close"></a><div class="inner_modal_box">' + options.content + '</div></div>');
            $(pop_up).appendTo('.block_page');

            $('.modal_close').click(function(){
                $(this).parent().fadeOut().remove();
                $('.block_page').fadeOut().remove();
                return false;
            });
        }

        return this;
    };

})($);
