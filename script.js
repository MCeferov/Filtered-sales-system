"use strict";


const product_1 = {
    name:  "White tshirt",
    category: "T-shirt",
    description : "test",
    image : "./images/1_org_zoom.webp"
}
const product_2 = {
    name:  "Basic Black tshirt",
    category: "T-shirt",
    description : "test",
    image : "images/1_org_zoom (1).webp"
}
const product_3 = {
    name:  "Designed Tshirt",
    category: "T-shirt",
    description : "test",
    image : "images/1_org_zoom (2).webp"
}
const product_4 = {
    name:  "Black-pant",
    category: "Pants",
    description : "test",
    image : "images/1_org_zoom (3).webp"
}
const product_5 = {
    name:  "Black jeans pant",
    category: "Pants",
    description : "test",
    image : "images/1_org_zoom (4).webp"
}
const product_6 = {
    name:  "Wool pants",
    category: "Pants",
    description : "test",
    image : "images/1_org_zoom (5).webp"
}
const product_7 = {
    name:  "Sport",
    category: "Shoes",
    description : "test",
    image : "images/1_org_zoom (6).webp"
}
const product_8 = {
    name:  "Black",
    category: "Shoes",
    description : "test",
    image : "images/1_org_zoom (7).webp"
}
const product_9 = {
    name:  "White",
    category: "Shoes",
    description : "test",
    image : "images/1_org_zoom (8).webp"
}
const product_10 = {
    name:  "Black",
    category: "Sunglasses",
    description : "test",
    image : "images/1_org_zoom (12).webp"
}
const product_11 = {
    name:  "Gray",
    category: "Sunglasses",
    description : "test",
    image : "images/1_org_zoom (13).webp"
}
const product_12 = {
    name:  "Rayban",
    category: "Sunglasses",
    description : "test",
    image : "images/1_org_zoom (14).webp"
}
const product_13 = {
    name:  "Dark gray cap",
    category: "Cap",
    description : "test",
    image : "images/1_org_zoom (9).webp"
}
const product_14 = {
    name:  "Green cap",
    category: "Cap",
    description : "test",
    image : "images/1_org_zoom (10).webp"
}
const product_15 = {
    name:  "Designed cap",
    category: "Cap",
    description : "test",
    image : "images/1_org_zoom (11).webp"
}
const productArray = [product_1, product_2, product_3, product_4, product_5 , product_6, product_7 , product_8, product_9, product_10, product_11, product_12, product_13 , product_14, product_15]

const lists = document.querySelectorAll(".menu-item")
const box = document.querySelector(".boxes")


for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", (e) => {
        e.preventDefault();
        box.innerHTML = "";


        for (let j = 0; j < productArray.length; j++) {
            if (productArray[j].category == lists[i].innerText) {
                    let structure = `<div class="box"> 
                <div class="image">
                <img src = "${productArray[j].image}" style="width:300px; padding= 15px"/>
                </div>
                
                <div class="name"> ${productArray[j].name} </div> </div>`
                box.innerHTML += structure
            } 
        }
    })
}