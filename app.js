
// Interaction avec le DOM

const keys = [...document.querySelectorAll('#keys')];
const listKeycode = keys.map(key => key.dataset.key);
const screen = document.getElementById('screen');
const theme = document.getElementById('theme');
const title = document.getElementById('title');
const sinButton = document.querySelector('[data-key="sin"]');
sinButton.addEventListener('click', () => {
  // Récupérez l'angle en degrés à partir de l'écran de la calculatrice
  const angleInDegrees = parseFloat(screen.textContent);
  // Convertir l'angle en radians
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  // Appelez la fonction Math.sin() avec l'angle en radians et formatez le résultat avec quatre chiffres après la virgule
  const result = Math.sin(angleInRadians).toFixed(4);
  // Affichez le résultat sur l'écran de la calculatrice
  screen.textContent = '';
  screen.textContent = result;
});

const cosButton = document.querySelector('[data-key="cos"]');
cosButton.addEventListener('click', () => {
  // Récupérez l'angle en degrés à partir de l'écran de la calculatrice
  const angleInDegrees = parseFloat(screen.textContent);
  // Convertir l'angle en radians
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  // Appelez la fonction Math.sin() avec l'angle en radians et formatez le résultat avec quatre chiffres après la virgule
  const result = Math.cos(angleInRadians).toFixed(3);
  // Affichez le résultat sur l'écran de la calculatrice
  screen.textContent = '';
  screen.textContent = result;
});

const tanButton = document.querySelector('[data-key="tan"]');
tanButton.addEventListener('click', () => {
  // Récupérez l'angle en degrés à partir de l'écran de la calculatrice
  const angleInDegrees = parseFloat(screen.textContent);
  // Convertir l'angle en radians
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  // Appelez la fonction Math.sin() avec l'angle en radians et formatez le résultat avec quatre chiffres après la virgule
  const result = Math.tan(angleInRadians).toFixed(2);
  // Affichez le résultat sur l'écran de la calculatrice
  screen.textContent = '';
  screen.textContent = result;
});


// Gestion des evenement du DOM
theme.addEventListener('click', ()=>{
    screen.classList.toggle('active');
    title.classList.toggle('active');
})

document.addEventListener('click', (e) =>{
    const value = e.target.dataset.key;
    calcul(value);
})


// Gestion des fonctions objets lies au calcul
const calcul = (value) =>{
    
        switch (value) 
        {
            case "8":
                screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
                break;
            case "0":
                screen.textContent = " ";
                break;
                
            case "187":
                const calculer = eval(screen.textContent);
                screen.textContent = calculer;
                break;

            default:
                const indexKeycode = listKeycode.indexOf(value);
                const key = keys[indexKeycode]
                screen.textContent += key.innerHTML;
                
            }
    
}

//verfication des erreurs du DOM
