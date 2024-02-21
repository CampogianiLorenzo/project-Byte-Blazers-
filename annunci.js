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
            link.style.color = '#e4f600';
            link.style.transition = '0.5s';
        })
        
        NAVBRAND.style.color = '#e4f600';
        NAVBRAND.style.transition = '0.5s';
        
        NAVBTN.style.backgroundColor = 'white';
        NAVBTN.style.color = 'black';
    } else {
        
        NAVBAR.style.backgroundColor = '#2a2a2a';
        
        NAVLINK.forEach((link) => {
            link.style.color = 'white';
            link.style.transition = '0.5s';
        })
        
        NAVBRAND.style.color = 'white';
        NAVBRAND.style.transition = '0.5s';
        
        NAVBTN.style.backgroundColor = 'black';
        NAVBTN.style.color = 'white';
    }
})
// Navbar 



fetch('./annunci.json').then((response)=>response.json()).then((data)=>{
    let categoriesWrapper= document.querySelector('#categoriesWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');
    // radio input x categoria
    console.log(data);
    function setCategoryRadios(){
        let categories = data.map((el)=> el.categoria)
        // console.log(categories);
        
        // array che contiene categorie non ripetute
        let uniqueCategories =[];
        
        categories.forEach((categoria)=>{
            if(!uniqueCategories.includes(categoria)){
                uniqueCategories.push(categoria)
            }
        })
        // console.log(uniqueCategories);
        
        uniqueCategories.forEach((categoria)=>{
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML= `
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${categoria}">
            <label class="form-check-label" for="${categoria}">
            ${categoria}
            </label>
            `
            categoriesWrapper.appendChild(div)
            // console.log(div);
        })
    }
    
    setCategoryRadios()
    
    function showcard(array){
        cardWrapper.innerHTML = ''
        array.forEach((element)=>{
            let div = document.createElement('div');
            div.classList.add('col-12','col-md-4');
            div.innerHTML = `
            <div class="card1 card1-content mx-auto">
            <img src="${element.url}" alt="" class="card1-img ">
            <div class="d-flex justify-content-start align-items-start flex-column px-3 mt-3">
            
            <h5 title="${element.nome}">${troncate(element.nome)}</h5>
            <p class="fst-italic">${element.categoria}</p>
            <p class="fw-bold"> € ${element.prezzo}</p>
            
            </div>
            </div>
            `
            cardWrapper.appendChild(div)
        })
    }
    
    showcard(data)
    
    
    // filtro categoria
    
    let radioInput= document.querySelectorAll('.form-check-input')
    let radioBtn= Array.from(radioInput)
    
    
    function filterCategory(array){
        let checked = radioBtn.find((radio)=>radio.checked)
        let category = checked.id
        if(category != 'all'){
            let filtered = array.filter((el)=> el.categoria == category)
            // console.log(filtered);
            return filtered
        } else{
            return array
        }
    }
    
    let inputRange = document.querySelector('.form-range');
    console.dir(inputRange);
    let priceLabel = document.querySelector('#priceLabel');
    
    // FILTRO PER PREZZO
    
    // funzione per trovare prezzo più alto
    function findMaxPrice(){
        let maxPrice = data.map((el) => Number(el.prezzo)).sort((a, b) => b - a)[0]
        
        inputRange.max = maxPrice;
        inputRange.value = maxPrice;
        // let maxPrice = 
    }
    
    findMaxPrice()

    function filtroPrezzo(array){
        let filtered = array.filter((el)=> +el.prezzo <= +inputRange.value)
        // console.log(filtered);
        return filtered

    }

    // filtro per parola
    let wordInput = document.querySelector('#wordInput');

    function filtroParola(array){
        let value = wordInput.value;
        let filtered=array.filter((el)=>el.nome.toLowerCase().includes(value.toLowerCase()))
        return filtered
    }
    

    //  fuzione globale

    function filtriGlobali(){
        let filteredCategory = filterCategory(data)
        let filteredPrice = filtroPrezzo(filteredCategory)
        let filteredWord = filtroParola(filteredPrice)

        showcard(filteredWord)
    }
    // eventi
    radioInput.forEach((input)=>{
        input.addEventListener('click', () =>{
            filtriGlobali()
        })
    })
    
    inputRange.addEventListener('input', () =>{
        priceLabel.innerHTML = inputRange.value 
        filtriGlobali()
    })

    wordInput.addEventListener('input', () => {
        filtriGlobali()
    })
    
    
    
    
    
    // funzione per tagliare titoli troppo lunghi
    function troncate(string){
        if(string.length > 25){
            return string.split(' ')[0]+ '...';
        }else{
            return string
        }
    }
    
})