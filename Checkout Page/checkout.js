function create(el){
    return document.createElement(el)
}
function getEliment(el){
 return document.querySelector(el)
}
let form =getEliment(".Delhivary_summary>form")
function next(){
    event.preventDefault()
    
    let firtName=getEliment("#firstName").value
    let Full_name=getEliment("#Full_name").value
    let Address_Line_1=getEliment("#Address_Line_1").value
    let Address_Line_2=getEliment("#Address_Line_2").value
    let City=getEliment("#City").value
    let State=getEliment("#State").value
    let Zip=getEliment("#Zip").value
    let Phone=getEliment("#Phone").value
    let Email=getEliment("#Email").value

    let obj={
        name:Full_name,
        Address:Address_Line_1,
        State:State,
        City:City,
        Zip:Zip,
        Phone:Phone,
        Email:Email,

    }
    localStorage.setItem("user_address",JSON.stringify(obj))
    form.innerText=""
    append(obj)
}

function append(obj){
    let h=create("h3")
    h.innerText="Delhivary Summary"
    let div=create("div")
    div.innerHtml=   ` <div class="name">
    <div>
        <label for="firstName">First name</label>      
        <input  id="firstName" type="text">
    </div>
    <div>
        <label for="LastName">Last name</label>
    <input id="LastName"  type="text">
    </div>
    
    </div>
        `
    console.log(div)

    form.append(h,div)
}


let updatePrice=()=>{
let cart = JSON.parse( localStorage.getItem("mealsCart"))
let meals=getEliment(".meals")
let meals_discount=getEliment(".meals_discount")
let subtotal=getEliment(".subtotal")
let Shipping=getEliment(".Shipping")
let total=getEliment(".total")
let size=document.querySelectorAll(".size")
size[1].innerText=cart.length
size[0].innerText=cart.length

}
updatePrice()