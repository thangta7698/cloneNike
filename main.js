window.onscroll = function() {
    let menrunning_shoes = document.querySelector('.menrunning_shoes');
    let menrunning_shoes_amount = menrunning_shoes.querySelector('h3');
    let sticky = menrunning_shoes.offsetTop;
    if (window.pageYOffset > sticky) {
        menrunning_shoes.classList.add('sticky');
        menrunning_shoes_amount.classList.add('menrunning_shoes-amount--customize');
    }
    else {
        menrunning_shoes.classList.remove('sticky');
        menrunning_shoes_amount.classList.remove('menrunning_shoes-amount--customize');
    }
}
// var menu = document.querySelector('menu_tollbars');
// var menu_item = menu.querySelector('menu-tollbars-list');
// menu_item.addEventListener()

