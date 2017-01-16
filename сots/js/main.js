jQuery(document).ready(function($)
{
    
        $('.order-btn').on('click', function() {
          $('#order-form, #overlay').show();
        });

    $('#overlay').on('click', function() {
          $('#order-form, #overlay').hide();
    });
    
    
})