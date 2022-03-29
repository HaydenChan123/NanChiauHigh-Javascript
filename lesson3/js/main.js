var jsonStringListOfFood = '{ "items" : [ '           +
    '{ "name": "carrot",     "price": "5" },'   +
    '{ "name": "broccoli",   "price": "6" },'   +
    '{ "name": "corn",       "price": "3" },'   +
    '{ "name": "onion",      "price": "8" },'   +
    '{ "name": "potato",     "price": "7" } '   +
    '] }';

$(document).ready(function(){
    // console.log('document ready')
    // console.log(jsonStringListOfFood) //this is string
    var jsonObjectListOfFood = JSON.parse(jsonStringListOfFood);
    // console.log(jsonObjectListOfFood)// this is object
    // 
    // var carrotobj = jsonObjectListOfFood.items[0];
    // var carrotname = carrotobj.name;
    // var carrotprice = carrotobj.price;
    // console.log(carrotobj)
    // console.log(carrotname)
    // console.log(carrotprice)
    // var newCard =  
    //                 '<div class="card bg-light">'+
    //                 '<div class="card-body text-center">'+
    //                 '<h2 class="card-text">' +
    //                 carrotname+
    //                 '</h2>'+
    //                 '<img src="img/item-'carrotname'.png">'+
    //                 '<h5>'+carrotprice+'</h5>'+
    //                 '</div>'+
    //                 '</div>';
    //     $('#food-items').append(newCard);
    var jsonObjectList = jsonObjectListOfFood.items;
    for (i=0; i<jsonObjectList.length; i++){
        var object = jsonObjectList[i];
        // console.log(object.name);
        var itemname = object.name;
        var itemprice = object.price;
        var newCard = getCardElement(itemname,itemprice);
        console.log(newCard)
        $('#food-items').append(newCard);

    }
    $('#search-bar').on('keyup',filterCards)
    $('#food-items .card').hover(addHighlight, removeHighlight);
    // console.log(jsonObjectList)

});
function addHighlight(){
    $(this).removeClass('bg-light')
    $(this).addClass('text-white bg-info');
}

function removeHighlight(){
    $(this).removeClass('text-white bg-info');
    $(this).addClass('bg-light')
}

function filterCards(){
    var searchTerm = $(this).val().toLowerCase();
    $('#food-items .card').each(function(){
        var cardContent = $(this).find('h2.card-text').text().toLowerCase();
        var searchMatch = cardContent.indexOf(searchTerm)> -1;
        $(this).toggle(searchMatch);

    });
}

function getCardElement(itemname, itemprice){
    var newCard =  
                    '<div class="card bg-light">'+
                    '<div class="card-body text-center">'+
                    '<h2 class="card-text">' +
                    itemname+
                    '</h2>'+
                    '<img src="img/item-'+itemname+'.png">'+
                    '<h5> $'+itemprice+'</h5>'+
                    '<div class="cart-buttons">'            +
                    '<i class="fas fa-minus-square fa-2x"> </i>'    +
                    '<span class="qty"> Qty: '              +
                    '<span class="qty-value"> 0 </span>'    +
                    '<i class="fas fa-plus-square fa-2x"> </i>'    +
                    '</div>'+
                    '</div>'+
                    '</div>';
    return newCard;
}