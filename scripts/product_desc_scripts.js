let productArr = JSON.parse(localStorage.getItem("itemData"));
console.log(productArr);
let titleDet = document.getElementById("titleDetails");
let navDet = document.getElementById("navValue");
let ratingDet = document.getElementById("ratingValue");
let fundSizeDet = document.getElementById("fundValue");

function showDescription(product){
    let divOne = document.createElement("div");
    let productImg = document.createElement("img");
    productImg.src = product[0].product_image;
    productImg.setAttribute("class", "proImg");

    let divTwo = document.createElement("div");
    let productTitle = document.createElement("div");
    productTitle.innerHTML = product[0].product_name;
    productTitle.setAttribute("class", "proName");

    let divThree = document.createElement("div");
    divThree.setAttribute("class", "divThree");
    let equityDet = document.createElement("div");
    equityDet.innerHTML = product[0].category;
    let riskDet = document.createElement("div");
    riskDet.innerHTML = product[0].risk;

    divOne.append(productImg);
    divTwo.append(productTitle);
    divThree.append(equityDet, riskDet);
    titleDet.append(divOne, divTwo, divThree);

    navDet.innerHTML = "₹" + product[0].nav;
    ratingDet.innerHTML = product[0].rating + "★";
    fundSizeDet.innerHTML = "₹" + product[0].fund_size;
}
showDescription(productArr);

if (localStorage.getItem("groww_cart") == null) {
    localStorage.setItem("groww_cart", JSON.stringify([]));
}

function addToCart(){

    let cartArr = JSON.parse(localStorage.getItem("groww_cart"));
    cartArr.push(productArr);
    localStorage.setItem("groww_cart", JSON.stringify(cartArr))

}

export { showDescription, addToCart };

