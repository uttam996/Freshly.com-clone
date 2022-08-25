
import data from "./productData.js";

function create(el) {
    return document.createElement(el)
}
function getEliment(el) {
    return document.querySelector(el)
}
let cont = getEliment(".products")
const displayData = (data) => {
    data.forEach((el) => {
        let div = create("div")
        let div_img = create("div")
        div.id = "item"
        let img = create("img")
        let tittle = create("h3")
        let p = create("p")
        let price = create("p")
        let btn = create("div")
        div_img.append(img)
        div_img.id = "img_cont"
        btn.addEventListener("click", () => {
            Addtocart(el)
        })

        let price_div = create("div")

        btn.append("+")
        price_div.id = "price_div"
        price.innerText = el.price
        img.src = el.img
        tittle.innerText = el.tittle
        p.innerText = el.Nutritions

        price_div.append(price, btn)
        div.append(div_img, tittle, p, price_div)
        cont.append(div)
    });

    //         {
    //     "img": "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1659483513/production-meal-image-1d053d43-fedb-4c71-93e4-615f29442853.jpg",
    //     "tittle": "Hearty Veggie Bolognese",
    //     "Nutritions": "490 Cal | Gluten Free | Single-Serve"
    //   },

}

const Addtocart = (el) => {
    let arr = JSON.parse(localStorage.getItem("mealsCart")) || []
    arr.push(el)
    localStorage.setItem("mealsCart", JSON.stringify(arr))
    displayCart()
}
displayData(data)





function displayCart(){
    let sum=0;
    let cart_cont=getEliment(".cart_cont")
    let cartData=JSON.parse(localStorage.getItem("mealsCart")) || []
    console.log(cartData)
    // <div class="cart_item">
    //                 <img src="https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1626451153/production-meal-without-background-image-71923e93-c22e-4f27-9119-fda4e9e74978.png" alt="">
    //                 <div><p>8 baked turkey Meatballs</p>
    //                  <h3>58$</h3>
    //                 </div>
    //                 <div class="plus_mines">
    //                     <div><h1>+</h1></div>
    //                     <div><h1>-</h1></div>
                       
    //                 </div>
    //             </div>

   cart_cont.innerText=""
    cartData.forEach((el) => {
    let main_div=create("div")
    let cart_img=create("img")
    let Titte_div=create("div")
    let tittle=create("p")
    let price=create("h3")
    let plus_div=create("div")

    let plus_div1=create("div")
    let plus_div2=create("div")
    
    let plus=create("h1")
    let minus=create("h1")
    plus_div1.append(plus)
    plus_div2.append(minus)

    cart_img.src=el.img

    tittle.innerText=el.tittle.split(" ")[0] +" "+ el.tittle.split(" ")[1]+" "+el.tittle.split(" ")[2]
    price.innerText=el.price
    console.log(sum)
    sum+= +(el.price.split(" ")[1])
   
    plus.innerText="+"
    minus.innerText="-"

    plus_div.setAttribute("class","plus_mines")
    plus_div.append(plus_div1,plus_div2)
    Titte_div.append(tittle,price)
    main_div.setAttribute("class","cart_item")
    main_div.append(cart_img,Titte_div,plus_div)
    cart_cont.append(main_div)
        
    });

    console.log(sum)
    getEliment(".saved>div>h4").innerText="Subtotal "+" $ "+sum
}
displayCart()
