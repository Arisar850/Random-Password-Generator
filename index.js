const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword = document.getElementById('firstPassword')
let secondPassword = document.getElementById('secondPassword')
function generatePassword(){
    let password1 = ''
    let password2 = ''
    for (let i=0; i<=15;i++){
        randomNumber = Math.floor(Math.random()*characters.length)
        password1 += characters[randomNumber]
    }
    firstPassword.textContent = password1
    for (let i=0; i<=15;i++){
        randomNumber = Math.floor(Math.random()*characters.length)
        password2 += characters[randomNumber]
    }
    secondPassword.textContent = password2
}

function copyPassword1() {
    const passwordElement = document.getElementById('firstPassword');
    if (passwordElement) {
        const textToCopy = passwordElement.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert(`Password copied: ${textToCopy}`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}

function copyPassword2() {
    const passwordElement = document.getElementById('secondPassword');
    if (passwordElement) {
        const textToCopy = passwordElement.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert(`Password copied: ${textToCopy}`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}