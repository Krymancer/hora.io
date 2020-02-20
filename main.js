const weekGUI = {
    'Sunday': document.getElementById('sun'),
    'Monday': document.getElementById('mon'),
    'Tuesday': document.getElementById('tue'),
    'Wednesday': document.getElementById('wed'),
    'Thursday': document.getElementById('thu'),
    'Friday': document.getElementById('fri'),
    'Saturday': document.getElementById('sat')
};

const table = document.getElementById('table').rows;

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const today = week[new Date().getDay()];

const colors = ['#fff','#00b4fc', '#eba130', '#82d071', '#50165c', '#cc6fbf', '#b63e0e']

weekGUI[today].setAttribute('class', 'today');

function createEvent(text) {
    return `<div class="event">${text}</div>`;
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'schedule.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);

}

loadJSON(function (response) {
    const time = ['A', 'B', 'C', 'D'];
    const schedule = JSON.parse(response);

    //Monday A
    table[0].cells[1].innerHTML = createEvent(schedule.Monday.A.name);
    table[0].cells[1].children[0].style.background = colors[schedule.Monday.A.color];
    //Monday B
    table[1].cells[1].innerHTML = createEvent(schedule.Monday.B.name);
    table[1].cells[1].children[0].style.background = colors[schedule.Monday.B.color];
    //Monday C
    table[2].cells[1].innerHTML = createEvent(schedule.Monday.C.name);
    table[2].cells[1].children[0].style.background = colors[schedule.Monday.C.color];
    //Monday D
    table[3].cells[1].innerHTML = createEvent(schedule.Monday.D.name);
    table[3].cells[1].children[0].style.background = colors[schedule.Monday.D.color];

    //Tuesday A
    table[0].cells[2].innerHTML = createEvent(schedule.Tuesday.A.name);
    table[0].cells[2].children[0].style.background = colors[schedule.Tuesday.A.color];
    //Tuesday B
    table[1].cells[2].innerHTML = createEvent(schedule.Tuesday.B.name);
    table[1].cells[2].children[0].style.background = colors[schedule.Tuesday.B.color];
    //Tuesday C
    table[2].cells[2].innerHTML = createEvent(schedule.Tuesday.C.name);
    table[2].cells[2].children[0].style.background = colors[schedule.Tuesday.C.color];
    //Tuesday D
    table[3].cells[2].innerHTML = createEvent(schedule.Tuesday.D.name);
    table[3].cells[2].children[0].style.background = colors[schedule.Tuesday.D.color];

    //Wednesday A
    table[0].cells[3].innerHTML = createEvent(schedule.Wednesday.A.name);
    table[0].cells[3].children[0].style.background = colors[schedule.Wednesday.A.color];
    //Wednesday B
    table[1].cells[3].innerHTML = createEvent(schedule.Wednesday.B.name);
    table[1].cells[3].children[0].style.background = colors[schedule.Wednesday.B.color];
    //Wednesday C
    table[2].cells[3].innerHTML = createEvent(schedule.Wednesday.C.name);
    table[2].cells[3].children[0].style.background = colors[schedule.Wednesday.C.color];
    //Wednesday D
    table[3].cells[3].innerHTML = createEvent(schedule.Wednesday.D.name);
    table[3].cells[3].children[0].style.background = colors[schedule.Wednesday.D.color];
    
    //Thursday A
    table[0].cells[4].innerHTML = createEvent(schedule.Thursday.A.name);
    table[0].cells[4].children[0].style.background = colors[schedule.Thursday.A.color];
    //Thursday B
    table[1].cells[4].innerHTML = createEvent(schedule.Thursday.B.name);
    table[1].cells[4].children[0].style.background = colors[schedule.Thursday.B.color];
    //Thursday C
    table[2].cells[4].innerHTML = createEvent(schedule.Thursday.C.name);
    table[2].cells[4].children[0].style.background = colors[schedule.Thursday.C.color];
    //Thursday D
    table[3].cells[4].innerHTML = createEvent(schedule.Thursday.D.name);
    table[3].cells[4].children[0].style.background = colors[schedule.Thursday.D.color];

     //Friday A
     table[0].cells[5].innerHTML = createEvent(schedule.Friday.A.name);
     table[0].cells[5].children[0].style.background = colors[schedule.Friday.A.color];
     //Friday B
     table[1].cells[5].innerHTML = createEvent(schedule.Friday.B.name);
     table[1].cells[5].children[0].style.background = colors[schedule.Friday.B.color];
     //Friday C
     table[2].cells[5].innerHTML = createEvent(schedule.Friday.C.name);
     table[2].cells[5].children[0].style.background = colors[schedule.Friday.C.color];
     //Friday D
     table[3].cells[5].innerHTML = createEvent(schedule.Friday.D.name);
     table[3].cells[5].children[0].style.background = colors[schedule.Friday.D.color];

});


