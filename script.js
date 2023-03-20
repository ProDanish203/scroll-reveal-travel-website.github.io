// Working Code For Animte On Scroll

function scrolltop(){
  var anime = document.querySelectorAll(".secpad");
  for(var i =0;i<anime.length; i++){
    var position = anime[i].getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(position < screenPosition){
      anime[i].classList.add("active");
    }else{
      anime[i].classList.remove("active");
    }
  }

}

window.addEventListener("scroll", scrolltop);




// window.addEventListener("scroll", function(){
//     var anime = document.querySelectorAll(".secpad");
//     for(var i = 0;i < anime.length;i++){
//         var windowHeight = window.innerHeight;
//         var animeTop = anime[i].getBoundingClientRect.top;
//         var animePoint= 150;

//         if(animeTop > windowHeight - animePoint){
//             anime[i].classList.add("active");
//         }
//         else{
//             anime[i].classList.remove("active");
//         }
//     }
// });


// const workSection = document.querySelector(".sections");
//     const workObserver = new IntersectionObserver((entries, observer) => {
//     const [entry] = entries;
//     console.log(entry);

//     // if(entry.isIntersecting == false);
//     if(!entry.isIntersecting) return;

//     // Animate Number Counter

//     const animate = document.querySelectorAll(".secpad");
//     animate.forEach((e) =>{
//         e.classList.toggle("active")
//     });
    

//   observer.unobserve(workSection);
//   }, {
//     root:null,
//     threshold: 0,
//   });

//   workObserver.observe(workSection);


// function animate(){
//   var section1 = document.querySelector(".secpad1");
//   var section2 = document.querySelector(".secpad2");
//   var section3 = document.querySelector(".secpad3");
//   var section4 = document.querySelector(".secpad4");
//   var position1 = section1.getBoundingClientRect().top;
//   var position2 = section2.getBoundingClientRect().top;
//   var position3 = section3.getBoundingClientRect().top;
//   var position4 = section4.getBoundingClientRect().top;
//   var screenPosition = window.innerHeight;

//   if(position1 < screenPosition){
//     section1.classList.add("active");
//   }
//   else{
//     section1.classList.remove("active");
//   }
//   if(position2 < screenPosition){
//     section2.classList.add("active");
//   }
//   else{
//     section2.classList.remove("active");
//   }
//   if(position3 < screenPosition){
//     section3.classList.add("active");
//   }
//   else{
//     section3.classList.remove("active");
//   }
//   if(position4 < screenPosition){
//     section4.classList.add("active");
//   }
//   else{
//     section4.classList.remove("active");
//   }
// }

// window.addEventListener("scroll", animate);