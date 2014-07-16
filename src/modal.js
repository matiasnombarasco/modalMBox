(function($){

    $.fn.modal_box = function(prop){

        // Default parameters - Im not proud for this, I promess that i will refator when i had a chance

        var options = $.extend({
            height : "250",
            width : "500",
            content: "Example of how to create a modal box.",
            top: "10%",
            topOffset : true,
            left: "30%",
            leftOffset: 0,
            noClick: false,
            onShow: function() {}
        },prop);

        if(options.noClick) {
            add_block_page();
            add_popup_box();
            set_styles();
            options.onShow.call(this);
            return false;
        } else {
            return this.click(function(e){
                add_block_page();
                add_popup_box();
                set_styles();    
                options.onShow.call(this);
                return false;
            });
        }
       
        function set_styles(){

            if(options.left == "centered") {
                options.left = '50%';
                options.leftOffset = '-' + (options.width/2) + 'px';
            }

          
                options.topOffset = options.top;
        
            $('.modal_box').css({
                'left': '50%',
                'margin-left': options.leftOffset,
                'top': options.topOffset,
                'height': 'auto',
                'max-height' : (window.innerHeight - 100) + 'px',
                'width': options.width + 'px',
                'visibility': 'visible'
            });

            /*Block page overlay*/
            var pageHeight = $(document).height();
            //var pageWidth = $(window).width();
            var pageWidth = "100%";

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
                $(this).parent().css({"visibility":"hidden"}).remove();
                $('.block_page').css({"visibility":"hidden"}).remove();
                //$(this).parent().fadeOut().remove();
                //$('.block_page').fadeOut().remove();
                return false;
            });
        }

        return this;
    };

})($);
