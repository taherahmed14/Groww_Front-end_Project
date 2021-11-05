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
    
    viewMff(arr)
}



let cont=0;

let parent = document.getElementById("right") ;



// this function will Run only when we invoke the tickmark 
function viewMff( d){
    
    if(cont==0)
    {
        parent.innerHTML = null;
        cont++;

    }
   
   
    d.forEach( function ( el)
    {
       // console.log("im in" , el)
    let div = document.createElement('div');
    div.setAttribute("class" , "MFdiv")

  
    
    
    let img = document.createElement('img');
    img.src= el.product_image;
    img.setAttribute("class" , "icon")
    
    

    let amc = document.createElement('p');
    amc.textContent = el.amc;
   


    let name = document.createElement('p');
    name.textContent= el.product_name;
    name.setAttribute("class" , "MFtext");


    let ch = document.createElement('div');
    ch.innerHTML= el.percentage_interval[0];
    ch.setAttribute("class" , "returns" )
    
    
   


    
      div.append( img , name , ch)

      div.onclick = function () {
        referData(el)
    }
    
      parent.append(div);
    
    
    
     } );


}






   

// this function will Run first to load all the funds name and details
function viewMf( d){

    parent.innerHTML = null;
   
    d.forEach( function ( el)
    {
       // console.log("im in" , el)
    let div = document.createElement('div');
    div.setAttribute("class" , "MFdiv")

  
    
    
    let img = document.createElement('img');
    img.src= el.product_image;
    img.setAttribute("class" , "icon")
    
    

    let amc = document.createElement('p');
    amc.textContent = el.amc;
   


    let name = document.createElement('p');
    name.textContent= el.product_name;
    name.setAttribute("class" , "MFtext");


    let ch = document.createElement('p');
    ch.textContent= el.percentage_interval;
    ch.setAttribute("class" , "returns" )
    
    
   


    
      div.append( img , name , ch)

      div.onclick = function () {
        referData(el)
    }
    
      parent.append(div);
    
    
    
     } );


}

if (localStorage.getItem("itemData") == null) {
    localStorage.setItem("itemData", JSON.stringify([]));
}


function referData(p) {

    var ProductDes = JSON.parse(localStorage.getItem("itemData"));

    ProductDes = [];

    ProductDes.push(p);
    console.log("pushed" , p)

    localStorage.setItem("itemData", JSON.stringify(ProductDes));

    window.location.href = "groww_product_description.html";
}


