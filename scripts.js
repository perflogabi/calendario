var h2 = document.querySelector(".calendario-bg h2");
var h3 = document.querySelector(".calendario-bg h3");

var monthArr = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

var dayArr = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];

var day31MonthArr = [
    "Janeiro",
    "Março",
    "Maio",
    "Julho",
    "Agosto",
    "Outubro",
    "Dezembro",
];

var d = new Date();

var obj = getDate();
gerarCalendario();

function getDate() {
    var month = d.getMonth();
    month = monthArr[month]

    var day = d.getDay();
    day = dayArr[day];

    var date = d.getDate();

    h2.innerHTML = date + "," + day;
    h3.innerHTML = month;

    return { m: month, dy: day, dt: date, yr: d.getFullYear() };
}


function gerarCalendario() {
    var days;

    if (obj.m === "Fevereiro" && obj.yr % 4 !== 0) {
        days = 28
    } else if (obj.m === "Fevereiro" && obj.yr % 4 === 0) {
        days = 29;
    } else if (day31MonthArr.includes(obj.m)) {
        days = 31;
    } else {
        days = 30;
    }
}

var LocalDayArr = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];

var startOfMonth = momentwithlocales().clone().startOf("month").format(ddd);

var dayIndex = LocalDayArr.indexOf(starOfMonth);

for (var j = 0; j < dayIndex; j++) {
    var element = document.createElement("div");
    element.className = "calendario__numeros__vazio";
    document.getElementById("dc").appendChild(element);
}

for (var k = 1; k <= days; k++) {
    var element = document.createElement("div");
    obj.dt === k ?
        (element.className = "calendario__numeros calendario__numeros--current") :
        (element.className = "calendario__numeros");

    element.appendChild(document.createTextNode(k));
    document.getElementById("dc").appendChild(element);
}