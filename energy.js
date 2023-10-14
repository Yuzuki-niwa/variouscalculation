function convertEnergy(){
    const energyInput = document.getElementById("energyInput").value
    const energy = energyInput* (299792458**2);
    const newenergy = new Intl.NumberFormat(`ja`,{ notation: `compact`}).format(energy);
    const result = `あなたのエネルギーは<br>${newenergy} J です`;
    document.getElementById("result").innerHTML = result;
}