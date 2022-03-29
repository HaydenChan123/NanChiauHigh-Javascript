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
    // console.log(jsonObjectList)

});
function getCardElement(itemname, itemprice){
    var newCard =  
                    '<div class="card bg-light">'+
                    '<div class="card-body text-center">'+
                    '<h2 class="card-text">' +
                    itemname+
                    '</h2>'+
                    '<img src="img/item-'+itemname+'.png">'+
                    '<h5> $'+itemprice+'</h5>'+
                    '</div>'+
                    '</div>';
    return newCard;
}