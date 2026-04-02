
const grades = [];
let userInput;
do { 
    userInput = prompt("Voer een punt in. Laat leeg of geef iets anders in om te stoppen:");
    if (!isNaN(userInput) && userInput !== "" && userInput !== null) {
        grades.push(Number(userInput));
    }
} while (!isNaN(userInput) && userInput !== "" && userInput !== null);

let som = 0;
let gebuisd = 0;

for(let punt of grades){
    som += punt;

    if(punt < 10){
        gebuisd++;
    }
}

const gemiddelde = som / grades.length;
const percentage = (som / (grades.length * 20) *100);

document.body.innerHTML = `
    <ul>
        <li>Gemiddelde: ${gemiddelde}</li>
        <li>Percentage: ${percentage}%</li>
        <li>Aantal gebuisde vakken: ${gebuisd}</li>
    </ul>
`;
