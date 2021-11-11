
let timerId;
let dropdownBox = document.getElementById("dropDown");
function showData(){
    let inputValue = document.getElementById("search").value;
    fetch("http://localhost:3000/api/products")
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log("For Search: ", res);
        let productArr = [];
        res.forEach(function(data){
            let temp = "";
            for(let i = 0; i < data.product_name.length; i++){
                temp += data.product_name[i];
                if(inputValue == temp){
                    console.log(data.product_name);
                    productArr.push(data);
                }
            }
            console.log(productArr);
            dropDown(productArr);
        });

    })
    .catch((err) => {
        console.log(err);
    })
}

function dropDown(product){
    dropdownBox.innerHTML = null;
    product.forEach((el) => {
        let div = document.createElement("div");
        let prodName = document.createElement("div");
        prodName.innerHTML = el.product_name;

        div.append(prodName);
        dropdownBox.append(div);
    });
}

function deBounce(func, delay){
    if(timerId){
        clearTimeout(timerId);
    }
    timerId = setTimeout(function(){
        func();
    }, delay);
}

export { showData, deBounce }; 