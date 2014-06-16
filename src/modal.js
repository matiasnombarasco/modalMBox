(function($){

    $.fn.modal_box = function(prop){

        // Default parameters

        var options = $.extend({
            height : "250",
            width : "500",
            content: "Example of how to create a modal box.",
            top: "20%",
            left: "30%"
        },prop);

        return this.click(function(e){
            add_block_page();
            add_popup_box();
            set_styles();

            $('.modal_box').fadeIn();
        });

        function set_styles(){
            $('.modal_box').css({
                'left':options.left,
                'top':options.top,
                'height': options.height + 'px',
                'width': options.width + 'px'
            });

            /*Block page overlay*/
            var pageHeight = $(document).height();
            var pageWidth = $(window).width();

            $('.block_page').css({
                'height':pageHeight,
                'width':pageWidth
            });
            $('.inner_modal_box').css({
                'height':(options.height - 50) + 'px',
                'width':(options.width - 50) + 'px'
            });
        }

        function add_block_page(){
            var block_page = $('<div class="block_page"></div>');

            $(block_page).appendTo('body');
        }

        function add_popup_box(){
            var pop_up = $('<div class="modal_box"><a href="#" class="modal_close"></a><div class="inner_modal_box"> + options.content + '</div></div>');
            $(pop_up).appendTo('.block_page');

            $('.modal_close').click(function(){
                $(this).parent().fadeOut().remove();
                $('.block_page').fadeOut().remove();
            });
        }

        return this;
    };

})(jQuery);