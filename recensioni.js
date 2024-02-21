// SEZIONE CLIENTI VISUALIZZAZIONI 



const number1= document.querySelector('#number1');
const number2= document.querySelector('#number2');
const number3= document.querySelector('#number3');


function createInterval(finalN,element,frequency){
    let counter = 0

    let interval = setInterval(() => {
      if(counter < finalN){
        counter++;
        element.innerHTML = counter
      }  else{
        //   console.log('non mi sono fermato');
          clearInterval(interval)
    
      }
    }, frequency);
}

createInterval(845,number1,1);
createInterval(785,number2,1);
createInterval(684,number3,1);


      // scrollObeserver.obeserve(number3)
      let scrollObeserver = new IntersectionObserver( (entries) => {
          console.log(entries);
          entries.forEach ((entry) =>{
              if (entry.isIntersecting){
                  console.log('ciao');
              }
          })
      })
      // scrollObeserver.obeserve(number3)

// SEZIONE CLIENTI VISUALIZZAZIONI 