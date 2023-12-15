
const choixord = document.getElementById('choixcom');
const choixuser = document.getElementById('choixus');
const result = document.getElementById('result');
const pierre = document.querySelector('#pierre');
const feuille = document.querySelector('#feuille');
const ciseaux = document.querySelector('#ciseaux');
let choixutilisateur;
let choixor,nb,res,choixus;
let userScore = 0;
let computerScore = 0;


//  ajouter event click sur les bottons 

    // recuperer id choisis
//alert(e.target.id)

///}
//)


      
     //////});
    //  

      pierre.addEventListener('click',function() 
      {
         userChoice("pierre");
      });
      feuille.addEventListener('click',function() 
      {
         userChoice("feuille");
      });
      ciseaux.addEventListener('click',function()   
      {
        userChoice("ciseaux");
      });

      // function userChoice(e)
      //   {
          // console.log(e);
          // choixuser.innerHTML = `<img src="assests/${e}.png"  />`;
          // choixutilisateur=e ;
          function userChoice(choice) {
            // console.log(choice);
            choixuser.innerHTML = `<img src="assests/${choice}.png"  />`;
            choixutilisateur = choice;
            console.log(choixutilisateur);
          compute()
          resultat()
          updateScoreDisplay()
      }
       
      
//choix du computer
 function compute()
 {
	  nb = Math.floor(Math.random()*3) + 1;
 	if (nb == 1){
   choixord.innerHTML= `<img src="assests/pierre.png"/>`;
   choixor="pierre";
}
 	else if (nb == 2){
     choixord.innerHTML= `<img src="assests/feuille.png"/>`;
     choixor="feuille";

  }
 	else if (nb == 3){
     choixord.innerHTML= `<img src="assests/ciseaux.png"/>`;
     choixor="ciseaux";

    }

console.log(choixor);

 }
 
function resultat()
{
  console.log(choixor);

  if( choixor === choixutilisateur){
    result.innerHTML= `<span> it's a Draw!!</span>`;
  }
 else if((choixutilisateur === "pierre" && choixor === "feuille" )|| (choixutilisateur  === "feuille" && choixor === "ciseaux")
  || (choixutilisateur  === "ciseaux" && choixor === "pierre") ){
    result.innerHTML= `<span>you lose!! </span>`;
    computerScore++;

  }
  else {
    result.innerHTML=` <span>good job,you win!!</span>`;
    userScore++;

  }
  
}
function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  // displayResult(""); // Clear the result display
}

// Function to update the score display
function updateScoreDisplay() {
  document.getElementById("userScore").textContent = userScore;
  document.getElementById("computerScore").textContent = computerScore;
}


// const choixord = document.getElementById('choixcom');
// const choixuser = document.getElementById('choixus');
// const result = document.getElementById('result');
// const pierre = document.querySelector('#pierre');
// const feuille = document.querySelector('#feuille');
// const ciseaux = document.querySelector('#ciseaux');
// let choixutilisateur, choixor, nb;

// pierre.addEventListener('click', function () {
//     userChoice("pierre");
// });

// feuille.addEventListener('click', function () {
//     userChoice("feuille");
// });

// ciseaux.addEventListener('click', function () {
//     userChoice("ciseaux");
// });

// function userChoice(choice) {
//     console.log(choice);
//     choixuser.innerHTML = `<img src="assests/${choice}.png"  />`;
//     choixutilisateur = choice;
//     compute();
//     resultat();
// }

// function compute() {
//     nb = Math.floor(Math.random() * 3) + 1;
//     if (nb === 1) {
//         choixord.innerHTML = `<img src="assests/pierre.png"/>`;
//     } else if (nb === 2) {
//         choixord.innerHTML = `<img src="assests/feuille.png"/>`;
//     } else if (nb === 3) {
//         choixord.innerHTML = `<img src="assests/ciseaux.png"/>`;
//     }

//     choixor = choixord.innerHTML;
// }

// function resultat() {
//     if (choixor === choixutilisateur) {
//         result.innerHTML = `<div>Draw</div>`;
//     } else if (
//         (choixutilisateur === "pierre" && choixor === "feuille") ||
//         (choixutilisateur === "feuille" && choixor === "ciseaux") ||
//         (choixutilisateur === "ciseaux" && choixor === 'pierre')
//     ) {
//         result.innerHTML = `<div>You lose!!</div>`;
//     } else {
//         result.innerHTML = `<div>Good job, you win!!</div>`;
//     }
// }