function search_item() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('items');
    ol = document.getElementById('list');
    let y = document.getElementsByClassName('noitems');

    if(input){
        document.querySelector('.product').style.display = 'block';
        document.querySelector('.product').style.top = '0px';
        //document.getElementsByClassName('container')[0].remove();
        //document.querySelector('.slide').style.display = 'none';
        document.querySelector('.container').style.visibility = 'hidden';
    }
    else{
        location.reload();
    }

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else if (x[i].innerHTML.toLowerCase().includes(input)) {

            x[i].style.display="list-item";
        }
        else{

        }

    }
    for(e = 0; e < y.length; e++){
        y[e].style.display="none";
    }
}
