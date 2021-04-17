$(document).ready(function(){
    // init Isotope
          var $grid = $('.item-details').isotope({
            // options
           });
          $('.filter-button-group').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
         $grid.isotope({ filter: filterValue });
         });
  });