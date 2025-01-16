/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}


{ 
// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is

// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

let interaction = document.querySelector('a:nth-of-type(1)')

// Stap 2: addEventListener
// bibberLink.addEventListener...

interaction.addEventListener('click', shakeIt)

function shakeIt() {
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...


interaction.classList.toggle('shake')

}

}



/*Animatie N 2 */
{ 
  
  
  let interaction = document.querySelector('a:nth-of-type(2)')
 
  
  interaction.addEventListener('click', bounceOut)
  
  function bounceOut() {
  
  
  interaction.classList.toggle('bounce')
  
  }
  
  }

  /*Animatie N 3 */

{ 
  
  let interaction = document.querySelector('a:nth-of-type(3)')
  
 
  interaction.addEventListener('click', SwingIn)
  
  function SwingIn() {
  
  
  interaction.classList.toggle('swing')
  
  }
  
  }

   /*Animatie N 4 */

{ 
  
  let interaction = document.querySelector('a:nth-of-type(4)')
  
 
  interaction.addEventListener('click', FadeOutLeft)
  
  function FadeOutLeft() {
  
  
  interaction.classList.toggle('fadingoutleft')
  
  }
  
  }

   /*Animatie N 5 */

   { 
  
    let interaction = document.querySelector('a:nth-of-type(5)')
    
   
    interaction.addEventListener('click', Bouncing)
    
    function Bouncing() {
    
    
    interaction.classList.toggle('bounceIn')
    
    }
    
    }

    /*Animatie N 6 */

   { 
  
    let interaction = document.querySelector('a:nth-of-type(6)')
    
   
    interaction.addEventListener('click', fadeOutRight)
    
    function fadeOutRight() {
    
    
    interaction.classList.toggle('fadeOutRight')
    
    }
    
    }

 /*Animatie N 7 */

 { 
  
  let interaction = document.querySelector('a:nth-of-type(7)')
  
 
  interaction.addEventListener('click', shakeY)
  
  function shakeY() {
  
  
  interaction.classList.toggle('shakeY')
  
  }
  
  }


/*Animatie N 8 */

{ 
  
  let interaction = document.querySelector('a:nth-of-type(8)')
  
 
  interaction.addEventListener('click', LookAtMe)
  
  function LookAtMe() {
  
  
  interaction.classList.toggle('LookAtMe')
  
  }
  
  }



/*Animatie N 9 */
{ 
  
  let interaction = document.querySelector('a:nth-of-type(9)')
  
 
  interaction.addEventListener('click', rubberBand)
  
  function rubberBand() {
  
  
  interaction.classList.toggle('rubberBand')
  
  }
  
  }



/*Animatie N 10 */

{ 
  
  let interaction = document.querySelector('a:nth-of-type(10)')
  
 
  interaction.addEventListener('click', RotateiT)
  
  function RotateiT() {
  
  
  interaction.classList.toggle('RotateiT')
  
  }
  
  }