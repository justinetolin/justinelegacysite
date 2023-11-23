const regularCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbersCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolsCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const regNumCharacters = regularCharacters.concat(numbersCharacters)
const regSymCharacters = regularCharacters.concat(symbolsCharacters)
const allCharacters = regularCharacters.concat(numbersCharacters, symbolsCharacters)
let varChar = allCharacters
let generateButton = document.getElementById('generator-btn')
let passOneEl = document.getElementById("passOne")
let passTwoEl = document.getElementById("passTwo")
let lengthEl = document.getElementById("length")
let numEl = document.getElementById("numbers")
let symEl = document.getElementById("symbols")
let numStat = true
let symStat = true
let passOnePlaceholder = ""
let passTwoPlaceholder = ""

numEl.addEventListener('change', function() {
    if (numStat === true) {
        numStat = false
    } else {
        numStat = true
    }
})

symEl.addEventListener('change', function() {
    if (symStat === true) {
        symStat = false
    } else {
        symStat = true
    }
})

generateButton.addEventListener('click', function() {
    // check if nunmbers and/or symbols is checked and set the varchar accordingly
    if (numStat === true && symStat === true) {
        varChar = allCharacters
    } else if (numStat === true && symStat === false) {
        varChar = regNumCharacters
    } else if (numStat === false && symStat === true) {
        varChar = regSymCharacters
    } else {
        varChar = regularCharacters
    }

    // main password generator based on varChar set by the conditional statements above
    passOnePlaceholder = ""
    for (let i = 0; i < lengthEl.value; i++) {
        randomNum = Math.floor(Math.random() * varChar.length)
        passOnePlaceholder += varChar[randomNum]
    }
    passOneEl.textContent = passOnePlaceholder

    passTwoPlaceholder = ""
    for (let i = 0; i < lengthEl.value; i++) {
        randomNum = Math.floor(Math.random() * varChar.length)
        passTwoPlaceholder += varChar[randomNum]
    }
    passTwoEl.textContent = passTwoPlaceholder
})



// ChatGPT Copy text on click function

const copyElement1 = document.getElementById('copy-element-1');
const copyElement2 = document.getElementById('copy-element-2');

copyElement1.addEventListener('click', () => {
  copyOnClick(copyElement1.id);
});

copyElement2.addEventListener('click', () => {
  copyOnClick(copyElement2.id);
});

function copyOnClick(elementId) {
    const element = document.getElementById(elementId);
    // Get the text of the element
    const text = element.textContent;
    // Create a hidden textarea element
    const textarea = document.createElement('textarea');
    // Set the value of the textarea to the text of the element
    textarea.value = text;
    // Make the textarea element visible so that it can be selected
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    // Select the text in the textarea
    textarea.focus();
    textarea.select();
    // Copy the text to the clipboard
    document.execCommand('copy');
    // Remove the textarea element
    document.body.removeChild(textarea);
  }
  

// pop up text of copied!

passOneEl.addEventListener('click', () => {
    showPopup(passOneEl.id);
  });

passTwoEl.addEventListener('click', () => {
    showPopup(passTwoEl.id);
  });

  function showPopup(elementId) {
    const element = document.getElementById(elementId);
    // Create the popup element
    const popup = document.createElement('div');
    popup.classList.add('popup-text');
    // Set the text of the popup to the data-popup attribute of the element
    popup.textContent = element.getAttribute('data-popup');
    // Position the popup above the element
    // popup.style.left = element.offsetLeft + 'px';
    // popup.style.top = (element.offsetTop - popup.offsetHeight) + 'px';
    // Make the popup visible
    popup.style.display = 'block';
    // Add the popup to the document
    document.body.appendChild(popup);  
    // Hide the popup after 3 seconds
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }
