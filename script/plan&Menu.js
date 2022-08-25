import Menudata from "./MenuData.js";
display(Menudata);
// console.log("Menudata:", Menudata);

function make(el) {
  return document.createElement(el);
}

function Elemnid(id) {
  return document.getElementById(id);
}

function display(data) {
  Elemnid("MenuList").innerHTML = "";
  data.forEach((el) => {
    // console.log("  el:", el);
    let div = make("div");
    div.id = "Menuitems";
    div.addEventListener("click", function () {
      Showdetail(el);
    });
    let divimg = make("div");
    divimg.id = "imagediv";
    let image = make("img");
    image.src = el.Image;
    let title = make("p");
    title.id = "menutitle";
    title.innerText = el.Title;
    let det = make("p");
    det.innerText = el.Nutritions;
    // console.log("  div:", div);
    divimg.append(image);
    div.append(divimg, title, det);
    Elemnid("MenuList").append(div);
  });
  Elemnid("filtercatagory").addEventListener("change", function () {
    filterbycatagory(data);
  });
}
// filter function
function filterbycatagory(data) {
  let select = Elemnid("filtercatagory").value;
  console.log(select);
  let flag = false;
  let temp = [];
  for (let i = 0; i < data.length; i++) {
    let a = data[i];
    if (select === a.catagory) {
      flag = true;
      temp.push(a);
    }
    if (select == "all") {
      window.location.reload();
      //   display(data);
    }
  }
  if (flag === true) {
    display(temp);
    // console.log(temp);
  }
}

function Showdetail(el) {
  console.log(el);
  //   Elemnid("preview")
}
