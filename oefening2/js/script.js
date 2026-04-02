let voornaam = ["Emma", "Liam", "Sophie", "Noah", "Fatima"];

let achternaam = ["Pietersen", "de Vries", "Bakker", "Legrand", "Errazouki"]

if (voornaam.length === achternaam.length) {
    let output = "<ul>";

    for (let i = 0; i < voornaam.length; i++) {
        output += `<li>${voornaam[i]} ${achternaam[i]}</li>`
        
    }

    output += "</ul>";
    document.body.innerHTML = output;
}
else{
    alert("arrays moeten even lang zijn")
}