jQuery('document').ready(function($){
    var btnMenu=$('.menu-icon'), menu=$('.navigation ul');
    btnMenu.click(function(){
        if(menu.hasClass('show'))
            menu.removeClass('show');
        else   
            menu.addClass('show');
    });
    /*var btnMenuContact=$('.menu-icon_contact'), menu=$('.navigation_contact ul');
    btnMenuContact.click(function(){
        if(menu.hasClass('show'))
            menu.removeClass('show');
        else   
            menu.addClass('show');
    });*/
});