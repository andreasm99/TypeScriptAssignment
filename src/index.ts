//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

/* import { helloWorld, Beispiel } from "./myModule";
import { alertMe } from "./myOtherModule";

console.log(helloWorld);
customElements.define("my-beispiel", Beispiel);

alertMe();

const myInputValue = document.querySelector<HTMLInputElement>("#myInput");

const myInputValueAlternate = document.querySelector(
  "#myInput"
) as HTMLInputElement;

document
  .querySelector<HTMLInputElement>("#myInput")
  ?.addEventListener("focus", doSmth);

function doSmth(e: UIEvent) {
  const val = e.target as HTMLInputElement;
  console.log(e, val.value);
}
*/

let output = document.getElementById("outputFinal") as HTMLDivElement;
const generateButton = document.getElementById("generatePassword") as HTMLButtonElement;
generateButton.addEventListener("click", generatePassword);
let lengthIndicator = document.getElementById("lengthIndicator") as HTMLSpanElement;
const strengthBar = document.getElementById("strengthBar") as HTMLInputElement;
let strengthIndicator = document.getElementById("strengthIndicator") as HTMLSpanElement;

window.onload = pwLengthDisplay;

function pwLengthDisplay(){
  let lengthField = document.getElementById("pwLength") as HTMLInputElement;
  lengthField.addEventListener("change", function(){
    lengthIndicator.innerHTML = this.value;
  });
}

// Hauptfunktion
function generatePassword(){
    let lengthField = document.getElementById("pwLength") as HTMLInputElement;
    let uppercaseField = document.getElementById("uppercase") as HTMLInputElement;
    let lowercaseField = document.getElementById("lowercase") as HTMLInputElement;
    let symbolsField = document.getElementById("symbols") as HTMLInputElement;
    let numbersField = document.getElementById("numbers") as HTMLInputElement;
    let pwTextField = document.getElementById("pwText") as HTMLInputElement;

    let length = lengthField.value;
    let uppercase = uppercaseField.checked;
    let lowercase = lowercaseField.checked;
    let symbols = symbolsField.checked;
    let numbers = numbersField.checked;
    let pwText = pwTextField.value;

    let charset = '';

    // Hinzufügen der möglichen Passwortzeichen
    if(lowercase){
      charset += 'abcdefghijklmnopqrstuvwxyz';
    }

    if(uppercase){
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if(symbols){
      charset += '!"ยง$%&/()=?*+.:-;_';
    }
    
    if(numbers){
      charset += '1234567890'
    }

    let generatedPassword = '';

    let passwordLength = parseInt(length);

    // Passwortlänge minus des selbst eingegebenen Textes, damit die Maximallänge nicht überschritten wird
    if(pwText.length != 0){
      passwordLength = passwordLength - pwText.length;
    }

    for(let i=0; i<passwordLength; i++){
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Zufälliges aufteilen des Passworts um den eigenen Text dort zu platzieren
    if(pwText.length != 0){
      let posInPw = Math.floor(Math.random() * generatedPassword.length );

      let pwSplitted1 = generatedPassword.slice(0, posInPw)
      let pwSplitted2 = generatedPassword.slice(posInPw, (passwordLength + pwText.length));

      generatedPassword = pwSplitted1 + pwText + pwSplitted2;
    }

    output.innerText = generatedPassword;
}