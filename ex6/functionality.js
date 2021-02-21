function fibonacci() {
    //var a,b,result;
    a = 0;
    b = 1;
    result = b;
    Arr = [];
    for (var i = 0; i < 20 - 1; i++) {
        if (a == 0) {
            Arr.push(0);
        }
        //document.write(result + '<br>');
        Arr.push(result);
        result = a + b;
        a = b;
        b = result;
    }
    document.getElementById("fibo").innerHTML = Arr.join("<br>");
}
/////

function graduation() {
    var now = new Date();
    var gradDate = new Date(2024, 7, 31);
    var currentTime = now.getTime();
    var gradTime = gradDate.getTime();
    var remTime = gradTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    h %= 24;
    m %= 60;
    s %= 60;
    document.getElementById("graduation-counter").innerText = "I will graduate from TAMK " + d + " days";
}
////

function BMI_calc() {
    var mass = document.getElementById('mass').value;
    var height = document.getElementById('height').value;
    var Height = height / 100;
    var bmi = parseFloat(mass) / parseFloat(Height ** 2);
    BMI = bmi.toFixed(2);
    document.getElementById('result').innerHTML = 'BMI = ' + BMI + ' kg/m<sup>2<sup>';
}
/////
function Hiphop() {
    var init = "";

    var min = Number(document.getElementById("min").value);
    var max = Number(document.getElementById("max").value);

    var text = document.getElementById("hiphop");
    for (var i = min; i <= max; i++) {
        if (i % 7 == 0 && i % 3 == 0) {
            text.innerHTML = init += "hiphop<br>"
        } else if (i % 3 == 0) {
            text.innerHTML = init += "hip <br>"
        } else if (i % 7 == 0) {
            text.innerHTML = init += "hop <br>"
        } else {
            text.innerHTML = init += i + "<br>"
        }
    }                                                                                                                     }
Aa
