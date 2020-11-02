function search_item() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('items'); 
    ol = document.getElementById('list');
    let y = document.getElementsByClassName('noitems');

    if(input){
        document.querySelector('.product').style.display = 'flex';
    }
    else{
        document.querySelector('.product').style.display = 'none';
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
