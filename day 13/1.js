let getWeather = () => {
    let cityName = document.querySelector("#textid").value || "pune";

    let url = "api.openweathermap.org/data/2.5/weather?appid=637348f94930ec1d58f109fc1220d2c4q&units=metric&q=" + cityName;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        console.log(refjson);
        domOperationHere(refjson);
    };

    xhr.send();
};

let domOperationHere = (refjson) => {
    console.log(refjson.main);
    const name = refjson.name;
    const maxTemp = refjson.main.temp_max;

    const parent = document.querySelector("#parent");

    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";
    newElement.innerHTML = name + " " + maxTemp;

    parent.insertBefore(newElement, parent.firstChild);

    document.querySelector("#textid").value = "";
}