function convertWeight(){
    const weightInput = document.getElementById("weightInput").value
    const newborn_number = weightInput / 2.945;
    const newborn2 = newborn_number.toFixed(2);
    const result = `あなたは新生児${newborn2}人分です`;
    document.getElementById("result").textContent = result;
}