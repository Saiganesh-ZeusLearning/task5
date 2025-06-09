

const hamburger = document.querySelector(".hamburger-btn");
const hamburgerList = document.querySelector(".hamburger-items")

hamburger.addEventListener("click", function (e) {
  console.log(hamburgerList.style.display === "none")
  if(hamburgerList.style.display === "none"){
      hamburgerList.style.display = "flex"
    } else{
        hamburgerList.style.display = "none"
    }
    console.log(hamburgerList.style.display === "none")
});

const items = document.querySelector(".header-hidden-items");

function Select_Header_Item(item){
    for(let i = 0; i < items.children.length; i++){
        items.children[i].classList.remove("header-selected-item");
    }
    item.classList.add("header-selected-item")
}

const dashboard = document.querySelector(".dashboard");
const content = document.querySelector(".content");
const users = document.querySelector(".users");
const reports = document.querySelector(".reports");
const admin = document.querySelector(".admin");

dashboard.addEventListener("click", function (e) {
    Select_Header_Item(dashboard);
})
content.addEventListener("click", function (e) {
    Select_Header_Item(content);
})
users.addEventListener("click", function (e) {
    Select_Header_Item(users);
})
reports.addEventListener("click", function (e) {
    Select_Header_Item(reports);
})
admin.addEventListener("click", function (e) {
    Select_Header_Item(admin);
})