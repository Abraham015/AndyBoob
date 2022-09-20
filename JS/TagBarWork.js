jQuery('document').ready(function($){
    var btnMenuWork=$('.menu-icon_work'), menu=$('.navigation_work ul');
    btnMenuWork.click(function(){
        if(menu.hasClass('show'))
            menu.removeClass('show');
        else   
            menu.addClass('show');
    });
});