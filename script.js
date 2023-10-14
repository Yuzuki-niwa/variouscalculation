function convertHeight(){
    const cmInput = document.getElementById('cmInput').value
    const feet = Math.floor(cmInput*0.0328084);
    const inches = Math.round((cmInput * 0.0328084 - feet)*12);
    const result = `${feet} feet ${inches} inches`;
    document.getElementById("result").textContent = result;
}

document.querySelector(".dropbtn").addEventListener("click", function(){document.querySelector(".dropdown-content").classList.toggle("show")
});