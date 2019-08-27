// ==UserScript==
// @name         Dizilab Clean
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto Skip and Remove ADs in Dizilab
// @author       Seukaiwokeo
// @match        http://dizilab6.com/*
// @match        http://dizilab.com/*
// @grant        none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require    http://cdnjs.cloudflare.com/ajax/libs/sugar/1.3/sugar.min.js
// ==/UserScript==


$(window).load(function() {
    $('.ads-skip, .ads-hide').css("display", "none");
});
$( document ).ready(function() {
    var ads = [".advert", "#statik_div", "#sticky", "iframe", ".close_page_skin", ".close_rekapat", "#container div.content div.right div.right-inner div:nth-child(9) div:nth-child(1)"];
    jQuery.each(ads, function(index, item) {
        $(item).remove();
    });
    $("#adv-video").click();
    $(".section-right").css("float", "initial");
    $(".section-right").css("width", "auto")
    $("#container").attr('style', 'margin-top: 0 !important');
    $(".most-tab").attr('style', 'padding-left: 15px; padding-right: 15px;');
    $(".section-right").css("margin-right", "0");
    $( "div" ).each(function( index ) {
        var attr = $(this).attr('data-tur');
        if (typeof attr !== typeof undefined && attr !== false) {
            $("div[data-tur=" + attr + "]").remove();
        }
    });
    var skipADS = setInterval(function(){
        if ( $( ".ads-skip" ).length ) {
            document.querySelector('.ads-skip').click();
        } else {
            clearInterval(skipADS);
        }
    }, 10);
});
