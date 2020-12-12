function calculatePrice(){
    //Get selected data  
    var elt = document.getElementById("Item");
    var item = elt.options[elt.selectedIndex].value;

    elt = document.getElementById('val');
    var value = elt.options[elt.selectedIndex].value;

    //convert data to integers
    item = parseInt(item);
    value = parseInt(value);


    //calculate total value  
    var total = (item) * (value); 

    //print value to  PicExtPrice 
    document.getElementById("PicExtPrice").value=total;
}