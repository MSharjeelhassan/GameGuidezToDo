document.addEventListener("DOMContentLoaded", () => {
  let modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  let items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});

// let array = [
//   {
//     title: "ponkaa",
//     content: "lorem",
//   },
//   { title: "ponka2", 
//   content: "lorem ipsum" },
// ];

// let divd = document.querySelector('.guides');
// console.log(divd);

// for(let i = 0; i<array.length;i++){

// divd.innerHTML += `<li>
// <div class="collapsible-header grey lighten-2" >${array[i].title}</div>
// <div class="collapsible-body white">${array[i].content}</div>
// </li>`

// }


// const guideList = document.querySelector('guides');
// const setupGuides = (data)=>{
// // let html ='';
// console.log(setupGuides);


// }
