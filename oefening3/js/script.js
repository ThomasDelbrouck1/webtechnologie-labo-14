
let userInput = Number(prompt("hoeveel vrienden wil je toevoegen:"));
let vrienden = [];

    for (let i = 0; i < userInput; i++) {
        let naam = prompt(`geef de naam in van vriend ${i+1} in:`)
        vrienden.unshift(naam);
    }

    let output = "<ul>"

    for (let i = 0; i < vrienden.length; i++) {
       output += `<li>${vrienden[i]}</li>`
        
    }

    output += "</ul>";
    document.body.innerHTML = output;

    
