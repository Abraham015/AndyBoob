jQuery('document').ready(function($){
    var btnMenuContact=$('.menu-icon_contact'), menu=$('.navigation_contact ul');
    btnMenuContact.click(function(){
        if(menu.hasClass('show'))
            menu.removeClass('show');
        else   
            menu.addClass('show');
    });
});