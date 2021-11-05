let prodContainer = document.getElementById("container");
let data ;
    //To GET data from server
    fetch("http://localhost:3000/api/products")
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log("res: ", res);
        viewMf(res)
        data = res;
        
    })
    .catch((err) => {
        console.log(err);
    })




var valuelist = document.getElementById('valueList')
var text ='<span> selected are: </span>';
var listArray = []

var checkboxes = document.querySelectorAll('.checkbox');

for( var checkbox of checkboxes){

    checkbox.addEventListener('click' , function(){
        if(this.checked == true){
            amc(this.value);
           // console.log(data)
        }else{
            console.log("you unchecked" , this.value)
        }

    })
}


function amc(x){
    let arr = data.filter(function(a) {
       // console.log(x)
        var name = x;
    return  a.amc == name ;

    } );
    
    viewMf(arr)
}





let parent = document.getElementById("Mutual") ;

   


function viewMf( d){

    parent.innerHTML = null;
   
    d.forEach( function ( el)
    {
       // console.log("im in" , el)
    let div = document.createElement('div');

  
    
    
    let img = document.createElement('img');
    img.src= el.product_image;
    

    let amc = document.createElement('p');
    amc.textContent = el.amc;
   


    let name = document.createElement('p');
    name.textContent= el.product_name;
    
   


    
      div.append( img , name , amc )
    
      parent.append(div);
    
    
    
     } );




}

