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

const output = document.getElementById("outputFinal") as HTMLDivElement;
const generateButton = document.getElementById("generatePassword") as HTMLButtonElement;
generateButton.addEventListener("click", generatePassword);
let lengthIndicator = document.getElementById("lengthIndicator") as HTMLSpanElement;


window.onload = pwLengthDisplay;

function pwLengthDisplay(){
  let lengthField = document.getElementById("pwLength") as HTMLInputElement;
  lengthField.addEventListener("change", function(){
    lengthIndicator.innerHTML = this.value;
  });
}

function generatePassword(){
    let lengthField = document.getElementById("pwLength") as HTMLInputElement;
    let uppercaseField = document.getElementById("uppercase") as HTMLInputElement;
    let lowercaseField = document.getElementById("lowercase") as HTMLInputElement;
    let symbolsField = document.getElementById("symbols") as HTMLInputElement;
    let numbersField = document.getElementById("numbers") as HTMLInputElement;

    let length = lengthField.value;
    let uppercase = uppercaseField.checked;
    let lowercase = lowercaseField.checked;
    let symbols = symbolsField.checked;
    let numbers = numbersField.checked;


    }