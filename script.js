
// RICHIAMA QUI GLI ELEMENTI
const NAVBAR = document.querySelector('#navbar');
const NAVLINK = document.querySelectorAll('.nav-link');
const NAVBRAND = document.querySelector('.navbar-brand');
const NAVBTN = document.querySelector('.btn_primary_custom');
// RICHIAMA QUI GLI ELEMENTI 

// Navbar
window.addEventListener('scroll' , () => {
    if (window.scrollY > 0) {
        
        NAVBAR.style.backgroundColor = '#2a2a2a';
        
        NAVLINK.forEach((link) => {
            link.style.color = 'white';
            link.style.transition = '0.5s';
        })
        
        NAVBRAND.style.color = 'white';
        NAVBRAND.style.transition = '0.5s';
        
        NAVBTN.style.backgroundColor = 'white';
        NAVBTN.style.color = 'black';
    } else {
        
        NAVBAR.style.backgroundColor = 'transparent';
        
        NAVLINK.forEach((link) => {
            link.style.color = 'black';
            link.style.transition = '0.5s';
        })
        
        NAVBRAND.style.color = 'black';
        NAVBRAND.style.transition = '0.5s';
        
        NAVBTN.style.backgroundColor = 'black';
        NAVBTN.style.color = 'white';
    }
})
// Navbar 


// RECENSIONI
const reviewsWrapper = document.querySelector('#reviewsWrapper');
        
let reviews = [
    {'name' : 'Krishi', 'review' : 'Tanta roba', 'rank' : 5, 'url' : 'https://wallpapers.com/images/hd/gaming-profile-pictures-tt8bbzdcf6zibhoi.jpg'},
    {'name' : 'Riccardo', 'review' : 'Tanta roba', 'rank' : 5, 'url' : 'https://wallpapers.com/images/hd/gaming-profile-pictures-tt8bbzdcf6zibhoi.jpg'},
    {'name' : 'Lorenzo', 'review' : 'Tanta roba', 'rank' : 5, 'url' : 'https://wallpapers.com/images/hd/gaming-profile-pictures-tt8bbzdcf6zibhoi.jpg'},
    {'name' : 'Andrei', 'review' : 'Tanta roba', 'rank' : 5, 'url' : 'https://wallpapers.com/images/hd/gaming-profile-pictures-tt8bbzdcf6zibhoi.jpg'},
];

reviews.forEach((recensione) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <div class="d-flex flex-column justify-content-start container_review">
        <div class="d-flex my-3 star_container">
            
        </div>
        <div class="text_container">
            <p>${recensione.review}</p>
        </div>
        <div class="container profile_container">
            <div class="row">
                <div class="col-12 col-md-3">
                    <div class="container_img">
                        <img src="${recensione.url}" class="img_review_custom img-fluid">
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <p class="fw-bold py-3 m-0">${recensione.name}</p>
                </div>
            </div>
        </div>
    </div>
    `
    reviewsWrapper.appendChild(div);


})

let starContainer = document.querySelectorAll('.star_container');

starContainer.forEach((wrapper, i) => {
    let voto = reviews[i].rank;
    console.log(voto);
    for (let i = 0; i <= voto; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        wrapper.appendChild(icon)
    }
})

// RECENSIONI

// swiper JS
let swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
// fine swiper JS

AOS.init();


