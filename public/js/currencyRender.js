// This module takes the number format and displays it as a currency with negative values displayed in red via CSS

$('div[class^="currencyRender"]').each(function () {
    var item = $(this).text();
    var num = Number(item).toLocaleString('en');    

    if (Number(item) < 0) {
        num = num.replace('-','');
        $(this).addClass('negMoney');
    }else{
        $(this).addClass('enMoney');
    }
    
    $(this).text(num);
});