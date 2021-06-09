let userinputEl = document.getElementById("userInput");
let factEle = document.getElementById("fact");
let spinnerEle = document.getElementById("spinner");

function displayfactaboutnumber(fact) {
    spinnerEle.classList.toggle("d-none");
    factEle.classList.remove("d-none");
    factEle.textContent = fact;
}

function factaboutnumber(event) {
    if (event.key === "Enter") {
        let userInputele = userinputEl.value;
        if (userInputele === "") {
            alert("enter a valid number");
        }

        let option = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputele;
        spinnerEle.classList.toggle("d-none");
        factEle.classList.add("d-none");
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                let {
                    fact
                } = jsonData;
                displayfactaboutnumber(fact);
            });
    }
}



userinputEl.addEventListener("keydown", factaboutnumber);
