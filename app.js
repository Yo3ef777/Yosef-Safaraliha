const item = document.getElementById("items");
const realyItem = document.getElementsByClassName("rect5");
const Hover = document.getElementsByClassName("rect8");
const opens = document.getElementsByClassName("open");
const closes = document.getElementsByClassName("closebtn");

const shownum = document.getElementById("number");
const progress = document.getElementById("progress");
const h6 = document.getElementById("h8");

let nameCompany;
let arrengmentnum;
let todo;
nameCompany = ["1.png", "2.png", "3.png", "4.png", "5.png"];
arrengmentnum = ["1", "0", "0", "1<"];
todo = ["Project completed", "Company", "Memeber teams", "Experience"];
let num = ["11", "12", "13", "14"];

function ShowItem() {
  let insert = [];
  nameCompany.forEach((element) => {
    insert.push(`<div class='rect8''>
        <img src='img/${element}' alt='logo' class='img'/>
        </div> 
        
        `);
  });

  item.innerHTML = insert.join(" ");
}

ShowItem();

function ShowExperience() {
  let insert = [];
  for (let i = 0; i < arrengmentnum.length; i++) {
    insert.push(`<div class='rect11'><h5 class='h5' id='h${num[i]}'>${arrengmentnum[i]}</h5></div>
    <div class='rect12'><p class='p' id='p${num[i]}'>${todo[i]}</p></div>`);
  }
  shownum.innerHTML = insert.join(" ");
}

ShowExperience();

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

opens[0].addEventListener("click", openNav);
closes[0].addEventListener("click", closeNav);
