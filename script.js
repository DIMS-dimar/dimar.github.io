// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // autoplay
//     autoplay: {
//         delay: 2500, // Waktu delay dalam milidetik
//         disableOnInteraction: false, // Tetap autoplay meskipun ada interaksi
//     },

//     // Breakpoints
//     breakpoints: {
//         480: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//         },
//         992: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//     },

//     mousewheel: {
//         invert: false,
//     },

//     // Effect

    
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
    
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
    
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });



// SLIDER IMAGE
const pengeser = document.querySelector(".penggeser");
const gambarContainer = document.querySelector(".gambar-container");
const sections = document.querySelectorAll(".gambar-container>section");
const buttonContainer = document.querySelector(".button")
const mundur = document.getElementById("prev_button")
const lanjut = document.getElementById("next_button")
let index = 4;
let translateAwal = 0;
let translateTetap = gambarContainer.offsetWidth / sections.length;

let jedaTombol = 500;


console.log(sections.length);

// gambarContainer.style.transform = `translateX(0%)`;

gambarContainer.style.transition = `none`
gambarContainer.style.transform = `translateX(-${translateTetap  * 3}px)`;
translateAwal += translateTetap * 3;

function lanjutPerbarui () {
    translateAwal += translateTetap;
    gambarContainer.style.transition = `transform .5s ease-in-out`
    gambarContainer.style.transform = `translateX(-${translateAwal}px)`;
}
    
function balikAwal (){
    translateAwal += translateTetap;
    gambarContainer.style.transition = `transform .5s ease-in-out`
    gambarContainer.style.transform = `translateX(-${translateAwal}px)`;
    translateAwal = 0;

    setTimeout(()=> {
        gambarContainer.style.transition = `none`
        gambarContainer.style.transform = `translateX(-${translateAwal}px)`;
    }, 500)
}

function mundurPerbarui () {
    gambarContainer.style.transition = `transform .5s ease-in-out`
    translateAwal -= translateTetap;
    gambarContainer.style.transform = `translateX(-${translateAwal}px)`;
}
    
function balikAkhir (){
    // translateAwal -= translateTetap;
    gambarContainer.style.transition = `none`
    gambarContainer.style.transform = `translateX(-${translateTetap * 10}px)`;
    
    setTimeout(()=> {
        // translateAwal = translateTetap*12;
        gambarContainer.style.transition = `transform .5s ease-in-out`
        gambarContainer.style.transform = `translateX(-${translateTetap * 9}px)`;
        translateAwal = translateTetap*9;
    }, 0)
}

lanjut.addEventListener("click", () => {
    // lanjut.disabled = true;
    lanjut.classList.add('matikan');

    setTimeout(()=> {
        // lanjut.disabled = false;
        lanjut.classList.remove('matikan')
    }, jedaTombol)


    if (index >= 1 && index < sections.length - 3) {
        index++;
        lanjutPerbarui();
        
    } else if (index == sections.length - 3) {
        index = 1;
        balikAwal();
        console.log("bata")

    } else {
        alert("kode error")
    }
})

mundur.addEventListener("click", () => {
    // lanjut.disabled = true;
    mundur.classList.add('matikan');

    setTimeout(()=> {
        // mundur.disabled = false;
        mundur.classList.remove('matikan')
    }, jedaTombol)


    if (index >= 2 && index <= sections.length) {
        console.log(index)
        index--;
        console.log("per")
        mundurPerbarui();

    } else if (index == 1){
        console.log(index)
        console.log("biji")
        index = 10;
        balikAkhir(); 
    }
    // } else if (index <  4 && index > 1) {
    //     console.log(index)
    //     index--;
    //     console.log("per")
    //     mundurPerbarui();

    // } else if (index == 1 ) {
    //     console.log("mamanh")
    //     gambarContainer.style.transition = `none`;
    //     gambarContainer.style.transform = `translateX(-${translateTetap * 10}px)`;
    //     setTimeout(()=>{
    //         gambarContainer.style.transition = `transform 0.5s ease-in-out`;
    //         gambarContainer.style.transform = `translateX(-${translateTetap * 9}px)`;
    //         translateAwal = translateTetap*9; 
    //         index = 10;
    //     },0)
    // }
})




// ACTIVABLE FAN
