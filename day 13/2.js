let getWeather = () => {

    let cityName = document.querySelector("#textid").value || "Pune";

    //let cityName = "pune";

    //let url = "https://api.openweathermap.org/data/2.5/weather?appid=637348f94930ec1d58f109fc1220d2c4&units=metric&q=mumbai";

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=637348f94930ec1d58f109fc1220d2c4&units=metric&q=" + cityName;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onload = () => {
        //console.log(xhr.responseText);
        const refjson = JSON.parse(xhr.responseText);
        console.log(refjson);
        domOperation(refjson);
    };

    xhr.send();
};

let domOperation = (refjson) => {

    const name = refjson.name;

    const maxTemp = refjson.main.temp_max;

    const parent = document.querySelector("#parent");

    const newElement = parent.children[0].cloneNode(true);

    newElement.style.display = "flex";

    newElement.innerHTML = name + " " + maxTemp;

    parent.insertBefore(newElement, parent.firstChild);

    document.querySelector("#textid").value = "";
}