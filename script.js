const products = [
    {id: 1,name:"Cheese Volcano Peppy Paneer",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/00ae34b9-dbf6-4788-bb79-b42513d5b474_volcanoHomePeppyPaneer.jpg?ver=V0.0.1",Price:299},
    {id:2 ,name:"Cheese Volcano Farmhouse",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/91d8018d-f353-4358-9226-a31f55d5b8b2_FullSizeFarmhouse.jpg?ver=V0.0.1",Price:249},
    {id: 3,name:"Cheese Volcano Veg Paradise",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/91d8018d-f353-4358-9226-a31f55d5b8b2_FullSizeFarmhouse.jpg?ver=V0.0.1",Price:299},
    {id: 4,name:"Corn & Cheese Volcano",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/ace91efd-72bb-4e1f-ad3f-5d08cc168545_FullSizeCornCheese.jpg?ver=V0.0.1",Price:299},
    {id: 5,name:"Veggie Paradise",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/a52b70f2-01cb-42b8-ae4f-566df999115c_farmhouse_side.webp?ver=V0.0.1",Price:249},
    {id: 6,name:"Double Cheese Margherita",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/a542d031-5fc8-4902-bbb3-25eebd3ace7e_veggie_paradise_side.webp?ver=V0.0.1",Price:299},
    {id: 7,name:"Indi Tandoori Paneer",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/7ed9c325-2b42-4824-a25a-367bb48332be_double_margherita_side.webp?ver=V0.0.1",Price:149},
    {id: 8,name:"Cheese n Corn",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/31b713fd-7986-41cc-b963-6d698a34a686_Corn_n_Cheese_Side.webp?ver=V0.0.1",Price:219},
    {id: 9,name:"Pepsi 450ml",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/6edcf0ad-e81c-4fcf-8f2e-ad7aef47890b_Pepsi-BEV0119-HomeProduct.jpg?ver=V0.0.1",Price:60},
    {id: 10,name:"Pepsi Black can 300ml",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/4a052d32-2ba2-4fa3-a0b8-c7fe1a79e587_PEPSIBLACKCANHome.jpg?ver=V0.0.1",Price:40},
    {id: 11,name:"7up 475ml",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/d7ae1fb9-520e-4e3c-904b-79360c57f941_7UPBOTTLEHome.jpg?ver=V0.0.1",Price:60},
    {id: 12,name:"Mirinda 475ml ",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/78ee85b9-ff92-42ca-85a0-dde043782326_MIRINDABOTTLEHome.jpg?ver=V0.0.1",Price:60},
    {id: 13,name:"Nagpur Orange ",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/35182557-877b-4224-b132-95e348b73c61_BNNagpurOrange-BEV0196-HomeProduct.jpg?ver=V0.0.1",Price:75},
    {id: 14,name:"Pepsi 295ml ",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/d98f0685-bf0c-44af-969e-3f22f97e2604_pepsi-BEV0123-HomeProduct.jpg?ver=V0.0.1",Price:49},
    {id: 15,name:"Lipton Ice tea",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/b0f5accb-8128-4c82-bf2b-106d4f0e273e_LiptonBottleHome.jpg?ver=V0.0.1",Price:75},
    {id: 16,name:"Mountain Dew",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/21dff2df-99ff-4b78-8e18-6d594fc3117c_MountainDew-BEV0121-HomeProduct.jpg?ver=V0.0.1",Price:60},
    {id: 17,name:"Water 500ml",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/f9ca565a-272f-4a6d-bda7-16b6170fa399_FullSizeAquavess.jpg?ver=V0.0.1",Price:30},
    {id: 18,name:"Chocolava Cake",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/9370665f-5afe-4065-a38a-08fcf7081116_CLC_side.webp?ver=V0.0.1",Price:109},
    {id: 19,name:"Korean Pepperoni Garlic Bread ",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/d28ef928-674c-4aac-acfb-03f5fe1c9bf1_FullsizeGarlicBreadwithPepperonikorean.jpg?ver=V0.0.1",Price:169},
    {id: 20,name:"Peri Peri Dep",Image:"https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/1ddb9b9f-e2ae-493e-bef1-fec3ea7aa3df_FullsizePeriPeriDipChickenFeast.jpg?ver=V0.0.1",Price:40},


  
]
function renderProducts(products,productList){
    const container = document.getElementById(productList);
    container.innerHTML="";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("Product-item");
        productDiv.innerHTML=`
        <img src= "${product.Image}"/>
        <h3>${product.name}</h3>
        <h2>${product.Price}</h2>
        <button onclick = "addToCart(${product.id})">Add++</button>
        `
        container.appendChild(productDiv);
    })
}


function searchProducts(query){
    const filterProducts = products.filter(product =>
        product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    renderProducts(filterProducts,"productList");
}

//sorting
function sortProducts(criteria){
    if(criteria ==="price"){
        return products.sort((a,b) => a.Price-b.Price);
    }
    return products;
}
// adding event listners
document.getElementById("sortOptions")?.addEventListener("change",(event)=>{
    const sortedProducts = sortProducts(event.target.value);
    renderProducts(sortedProducts,"productList");
})

document.getElementById("searchButton")?.addEventListener("click",() => {
    const query = document.getElementById("productSearch").value;
    searchProducts(query);
})

//if(document.getElementById("productList"))renderProducts(products,"productList");
//Add to cart
function addToCart(productId){
    const product=products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(`${product.name}is added to store`)
    renderCart();

}
//render items in cart
function renderCart(){
    const cart=JSON.parse(localStorage.getItem("cart"))||[];
    const container=document.getElementById("cartItems");
    container.innerHTML="";
    if(cart.length == 0){
        container.innerHTML="<h1>Your Store is Empty</h1>"
    }
    cart.forEach(item =>{
        const cartDiv= document.createElement("div");
        cartDiv.classList.add("cart-item");
        cartDiv.innerHTML=`
        <img src="${item.Image}"/> 
        <h3>${item.name}</h3>
        <h2>${item.Price}</h2>
        <button onclick="removeFromCart(${item.id})">Remove</button>
        `
        container.appendChild(cartDiv);
    })
    renderSubtotal(cart);
}


//Remove from cart


function removeFromCart(productID){
let cart = JSON.parse(localStorage.getItem("cart"))||[];
cart =cart.filter(item => item.id !== productID);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Product is removed successfully");
renderCart();
}

//Calculate subtotal
function renderSubtotal(cart){
    const subtotal = cart.reduce((total,item) => total + item.Price,0);
    const subtotalContainer = document.getElementById("subtotal");
    if(cart.length > 0){
        subtotalContainer.innerHTML = `Subtotal : Rs.${subtotal}`
    }else{
        subtotalContainer.innerHTML = `No items in the cart`
    }
}

if(document.getElementById("productList"))renderProducts(products,"productList");
if(document.getElementById("cartItems"))renderCart();
