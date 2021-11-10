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

var amcData=[] ;
var CategoryData=[] ;
var RiskData=[];




var checkboxes = document.querySelectorAll('.amctick');

for( let checkbox of checkboxes){

    checkbox.addEventListener('click' , function(){
        if(this.checked == true){
            amc(this.value);
           // console.log(data)
        }else{
            console.log("you unchecked" , this.value)
           // No_amc(this.value)
           N_amc(this.value);
        }

    })
}


var c_boxes = document.querySelectorAll('.c_tick');

for( let checkbox of c_boxes){

    checkbox.addEventListener('click' , function(){
        if(this.checked == true){
            C_filter(this.value);
            // console.log("Catadataaa" ,this.value)
        }else{
            console.log("you unchecked" , this.value)
          
           // No_amc(this.value)
        }

    })
}

var R_boxes = document.querySelectorAll('.R_tick');

for( let checkbox of R_boxes){

    checkbox.addEventListener('click' , function(){
        if(this.checked == true){
            R_filter(this.value);
            // console.log("Catadataaa" ,this.value)
        }else{
            console.log("you unchecked" , this.value)
           // No_amc(this.value)
        }

    })
}


var F_boxes = document.querySelectorAll('.F_tick');

for( let checkbox of F_boxes){

    checkbox.addEventListener('click' , function(){
        if(this.checked == true){
            Fund_filter(Number(this.value));
            // console.log("Catadataaa" ,this.value)
        }else{
            console.log("you unchecked" , this.value)
            
           // No_amc(this.value)
        }

    })
}

function clear_Tick(){
    
    location.reload();
}


function Fund_filter(x){
    let arr = RiskData.filter(function(a) {
       // console.log("filte", x)                     //// Discuss to change the data of CR and Add more Data
        var name = x;
    return  a.fund_Category <= name ;

    } );
   // amcData = arr;
   
  // console.log("afteCfilte" , CategoryData)
    viewMf(arr)
}


function R_filter(x){
    let arr = CategoryData.filter(function(a) {
                    
        var name = x;
    return  a.risk == name ;

    } );
   // amcData = arr;
   RiskData.push(...arr)
  
    viewMf(arr)
}





function C_filter(x){
    let arr = amcData.filter(function(a) {
       // console.log("filte", x)                     /////////////
        var name = x;
    return  a.category == name ;

    } );
   // amcData = arr;
   CategoryData.push(...arr);
  // console.log("afteCfilte" , CategoryData)
    viewMf(arr)
}


function N_amc(x){
    let arr = amcData.filter(function(a) {
       // console.log("filte", x)
        var name = x;
    return  a.amc != name ;

    } );
   // amcData = arr;
    amcData=[];
    amcData .push(...arr);
  // console.log("arrdata" , amcData)
    viewMf(arr)
}




function amc(x){
    let arr = data.filter(function(a) {
       // console.log("filte", x)
        var name = x;
    return  a.amc == name ;

    } );
   // amcData = arr;
    amcData .push(...arr);
  // console.log("arrdata" , amcData)
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


