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


  // Passwort generieren
    for(let i=0; i<passwordLength; i++){
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

  // Passwortlänge minus des selbst eingegebenen Textes, damit die Maximallänge nicht überschritten wird
     if(pwText.length != 0){
      passwordLength = passwordLength - pwText.length;
     }    

    // Zufälliges aufteilen des Passworts um den eigenen Text dort zu platzieren
    if(pwText.length != 0){
      let posInPw = Math.floor(Math.random() * generatedPassword.length );

      let pwSplitted1 = generatedPassword.slice(0, posInPw)
      let pwSplitted2 = generatedPassword.slice(posInPw, (passwordLength + pwText.length));

      generatedPassword = pwSplitted1 + pwText + pwSplitted2;
    }

    output.innerText = generatedPassword;

    // Passwortstärkenanzeige
    let uppercasePoints = 0;
    let lowercasePoints = 0;
    let symbolsPoints = 0;
    let numbersPoints = 0;

    if (uppercase){
      uppercasePoints += 5;
    }
    if (lowercase){
      lowercasePoints += 5;
    }
    if (symbols){
      symbolsPoints += 5;
    }
    if (numbers){
      numbersPoints += 5;
    }

    let strengthPoints = uppercasePoints + lowercasePoints + symbolsPoints + numbersPoints + parseInt(length);

  if (strengthPoints <= 15){
    strengthBar.className = "strengthDesignSchwach";
    strengthIndicator.innerText = "Schwach";
  }
  else if (strengthPoints >= 38){
    strengthBar.className = "strengthDesignStark"
    strengthIndicator.innerText = "Stark";
  }
  else if (strengthPoints >= 26){
    strengthBar.className = "strengthDesignGut"
    strengthIndicator.innerText = "Gut";
  } 
  else if (strengthPoints >= 16){
    strengthBar.className = "strengthDesignOkay";
    strengthIndicator.innerText = "Okay";
  }  
}

// In Zwischenablage kopieren funktion
// Hilfe von https://stackabuse.com/how-to-copy-to-clipboard-in-javascript-with-the-clipboard-api/
const copyDiv = document.getElementById("outputfield") as HTMLDivElement;
copyDiv.addEventListener("click", copyToClipboard);

function copyToClipboard(){
    var copyPassword = document.getElementById("outputFinal") as HTMLDivElement;
    let toCopy = '';
    toCopy = copyPassword.innerHTML;
    navigator.clipboard.writeText(toCopy).then(() => {
        alert("Passwort erfolgreich kopiert!");
    });
}