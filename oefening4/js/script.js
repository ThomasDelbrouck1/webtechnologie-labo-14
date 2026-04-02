const grades = [16,12,16,7,17,14,9,8,18,12];

let som = 0;
let gebuisd = 0;

for(let punt of grades){
    som += punt;

    if(punt <10){
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
