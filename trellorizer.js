// ==UserScript==
// @name       Trellorizer
// @namespace  https://github.com/dholovnia/trellorizer
// @version    0.1
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @description  Changes background color of Trello cards to match labels
// @match      https://trello.com/b/*
// @copyright  2016+, Dima Holovnia(BeRocket.com)
// ==/UserScript==

var colorize = function() {
  jQuery(".list-card").each(function (i,o){
    jQuery(o).css("background-color", "").css("border", "");
    $label = jQuery(o).find('.card-label:last');
    
    a = ['black', 'green', 'yellow', 'orange', 'red', 'blue', 'purple', 'lime'];
    c = ['#4d4d4d', '#61bd4f', '#f2d600', '#ffab4a', '#eb5a46', '#0079bf', '#c377e0', '#51e898'];
    
    
    for( var i = 0; i < a.length; i++ ){
      if ( $label.hasClass('card-label-'+a[i]) ) {
        $(o).css("background-color", c[i]);
        if ( a[i] == 'black' || a[i] == 'blue' || a[i] == 'green' || a[i] == 'purple' ) {
          $(o).find('.list-card-title, .badge-icon, .badge-text').css("color", 'white');
        } else {
          $(o).find('.list-card-title, .badge-icon, .badge-text').css("color", '#4d4d4d');
        }
        $label.hide();
        break;
      }
    }
  });
};

$(document).ready(function() {
  colorize();
  setInterval(colorize, 500);
});
