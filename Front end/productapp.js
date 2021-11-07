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
           // No_amc(this.value)
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



function Sorting(){
    let temp = document.getElementById("Sort")
     let name= temp.value;

     if(name=="Rat")
     sortHL();
     else if(name=="Ret")
     Ret_sortHL()
         
}


  function sortHL() {
    
  let arr = data.sort(function(a,b){
   
   return b.rating - a.rating;

  });

  viewMf(arr)

  }
 

  function Ret_sortHL() {
    
  let arr = data.sort(function(a,b){
   
   return b.return_percentage - a.return_percentage;

  });

  viewMf(arr)

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

    let intervalOne = document.createElement("div");
    intervalOne.innerHTML = el.percentage_interval[0];
    intervalOne.setAttribute("class" , "returns" )

    let intervalTwo = document.createElement("div");
    intervalTwo.innerHTML = el.percentage_interval[1];
    intervalTwo.setAttribute("class" , "returns" )

    let intervalThree = document.createElement("div");
    intervalThree.innerHTML = el.percentage_interval[2];
    intervalThree.setAttribute("class" , "returns" )

    
    let subdiv = document.createElement('div')
    subdiv.setAttribute("class" , "sub")

    let risk = document.createElement('div')
    risk.innerHTML= el.risk + "· " + el.category + "· " + el.rating + "★" ;
    risk.setAttribute("class" , "MFsub_text")

    let day = document.createElement('div');
    day.innerHTML= "1D"+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+"1Y"+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+"3Y";
    day.setAttribute("class" , "MFsub_text2")

    subdiv.append(risk , day)


    
      div.append( img , name , intervalOne, intervalTwo, intervalThree , subdiv)
    
     

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
    


    let name = document.createElement('p');
    name.textContent= el.product_name;
    name.setAttribute("class" , "MFtext");


    let intervalOne = document.createElement("div");
    intervalOne.innerHTML = el.percentage_interval[0];
    intervalOne.setAttribute("class" , "returns" )

    let intervalTwo = document.createElement("div");
    intervalTwo.innerHTML = el.percentage_interval[1];
    intervalTwo.setAttribute("class" , "returns" )

    let intervalThree = document.createElement("div");
    intervalThree.innerHTML = el.percentage_interval[2];
    intervalThree.setAttribute("class" , "returns" )

    let subdiv = document.createElement('div')
    subdiv.setAttribute("class" , "sub")

    let risk = document.createElement('div')
    risk.innerHTML= el.risk + "· " + el.category + "· " + el.rating + "★" ;
    risk.setAttribute("class" , "MFsub_text")

    let day = document.createElement('div');
    day.innerHTML= "1D"+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+"1Y"+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+"3Y";
    day.setAttribute("class" , "MFsub_text2")

    subdiv.append(risk , day)


    
      div.append( img , name , intervalOne, intervalTwo, intervalThree , subdiv)

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


