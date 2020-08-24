let callAjaxUsingJquery = () => {

    let cityName = $("#textid").val() || "pune";

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=637348f94930ec1d58f109fc1220d2c4&units=metric&q=" + cityName;


    $.ajax(url).done((data1) => {
        console.log(data1);
        myDOMoperationHere(data1);
    });

};


let myDOMoperationHere = (data1) => {
    //const parent = document.querySelector("#parent");
    //const parent = $("#parent");

    //const newElement = parent.children[0].cloneNode(true);
    // const newElement = $("#parent :nth-child(1)").clone(true);
    const newElement = $("#parent :nth-child(1)");

    //newElement.innerHTML = data1.name + " " + data1.main.temp_max;
    newElement.html(data1.name + " " + data1.main.temp_max);

    // parent.insertBefore(newElement, parent.firstChild);
    newElement.insertBefore("#parent :nth-child(1)");

    $("#textid").val("");
}; 