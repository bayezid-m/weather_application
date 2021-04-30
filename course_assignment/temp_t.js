document.getElementById('button4_1_5').addEventListener('click', getView4_1_5);
document.getElementById('button4_2_5').addEventListener('click', getView4_2_5);
document.getElementById('button4_3_5').addEventListener('click', getView4_3_5);
document.getElementById('button4_4_5').addEventListener('click', getView4_4_5);
document.getElementById('button4_5_5').addEventListener('click', getView4_5_5);
document.getElementById('button4_6_5').addEventListener('click', getView4_6_5);


function getView4_1_5(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for temperature<br>Showing latest 20 measurements</h2>';
        var output = `
        <thead>
        <tr>
                    <th>Row</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Measurement Type</th>
                    <th>Value</th>
                    </tr></thead>
                    `
        for(i=0; i<Arr.length; i++){
        output +=`<tbody>
       <tr>
       <td>${i+1}</td>
       <td>${Arr[i].date_time.split("T")[0]}</td>
       <td>${Arr[i].date_time.split("T")[1].split(".")[0]}</td>
       <td>${'temprerature'}</td>
       <td>${Arr[i].temperature}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;
       
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            //console.log(data)
            var time = data.map(function(elem){
                return elem.date_time.split("T")[1].split(".")[0];
            });
            var value = data.map(function(elem){
                return elem.temperature;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Temperatue Value',
                data: value,
                backgroundColor: '#4B0082',
                borderColor: 'black',
                borderWidth: 1,              
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
        }
    }    
}
///////////////////////////////

function getView4_2_5(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/23')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for temperature<br>Showing measurements for Latest 24 hours<br>(hourly average)</h2>';
        var output = `
        <thead>
        <tr>
                    <th>Row</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Measurement Type</th>
                    <th>Value</th>
                    </tr></thead>
                    `
        for(i=0; i<Arr.length; i++){
        output +=`<tbody>
       <tr>
       <td>${i+1}</td>
       <td>${Arr[i].date_time.split("T")[0]}</td>
       <td>${Arr[i].date_time.split("T")[1].split(".")[0]}</td>
       <td>${'temprerature'}</td>
       <td>${Arr[i].temperature}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;
       
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/23";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            //console.log(data)
            var time = data.map(function(elem){
                return elem.date_time.split("T")[1].split(".")[0];
            });
            var value = data.map(function(elem){
                return elem.temperature;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Temperatue Value',
                data: value,
                backgroundColor: '#4B0082',
                borderColor: 'black',
                borderWidth: 1,              
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
        }
    }    
}
//////////////////////

function getView4_3_5(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/47')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for temperature<br>Showing measurements for Latest 48 hours<br>(hourly average)</h2>';
        var output = `
        <thead>
        <tr>
                    <th>Row</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Measurement Type</th>
                    <th>Value</th>
                    </tr></thead>
                    `
        for(i=0; i<Arr.length; i++){
        output +=`<tbody>
       <tr>
       <td>${i+1}</td>
       <td>${Arr[i].date_time.split("T")[0]}</td>
       <td>${Arr[i].date_time.split("T")[1].split(".")[0]}</td>
       <td>${'temprerature'}</td>
       <td>${Arr[i].temperature}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;
       
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/47";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            //console.log(data)
            var time = data.map(function(elem){
                return elem.date_time.split("T")[1].split(".")[0];
            });
            var value = data.map(function(elem){
                return elem.temperature;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Temperatue Value',
                data: value,
                backgroundColor: '#4B0082',
                borderColor: 'black',
                borderWidth: 1,              
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
        }
    }    
}
/////////////////

function getView4_4_5(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/71')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for temperature<br>Showing measurements for Latest 72 hours<br>(hourly average)</h2>';
        var output = `
        <thead>
        <tr>
                    <th>Row</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Measurement Type</th>
                    <th>Value</th>
                    </tr></thead>
                    `
        for(i=0; i<Arr.length; i++){
        output +=`<tbody>
       <tr>
       <td>${i+1}</td>
       <td>${Arr[i].date_time.split("T")[0]}</td>
       <td>${Arr[i].date_time.split("T")[1].split(".")[0]}</td>
       <td>${'temprerature'}</td>
       <td>${Arr[i].temperature}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;
       
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/71";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            //console.log(data)
            var time = data.map(function(elem){
                return elem.date_time.split("T")[1].split(".")[0];
            });
            var value = data.map(function(elem){
                return elem.temperature;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Temperatue Value',
                data: value,
                backgroundColor: '#4B0082',
                borderColor: 'black',
                borderWidth: 1,              
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
        }
    }    
}
//////////////////

function getView4_5_5(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/167')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for temperature<br>Showing measurements for Latest 1 week<br>(hourly average)</h2>';
        var output = `
        <thead>
        <tr>
                    <th>Row</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Measurement Type</th>
                    <th>Value</th>
                    </tr></thead>
                    `
        for(i=0; i<Arr.length; i++){
        output +=`<tbody>
       <tr>
       <td>${i+1}</td>
       <td>${Arr[i].date_time.split("T")[0]}</td>
       <td>${Arr[i].date_time.split("T")[1].split(".")[0]}</td>
       <td>${'temprerature'}</td>
       <td>${Arr[i].temperature}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;  
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/167";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            //console.log(data)
            var time = data.map(function(elem){
                return elem.date_time.split("T")[1].split(".")[0];
            });
            var value = data.map(function(elem){
                return elem.temperature;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Temperatue Value',
                data: value,
                backgroundColor: '#4B0082',
                borderColor: 'black',
                borderWidth: 1,              
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
        }
    }    
}
///////////////////////

function getView4_6_5(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/719')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for temperature<br>Showing measurements for Latest 1 month<br>(hourly average)</h2>';
        var output = `
        <thead>
        <tr>
                    <th>Row</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Measurement Type</th>
                    <th>Value</th>
                    </tr></thead>
                    `
        for(i=0; i<Arr.length; i++){
        output +=`<tbody>
       <tr>
       <td>${i+1}</td>
       <td>${Arr[i].date_time.split("T")[0]}</td>
       <td>${Arr[i].date_time.split("T")[1].split(".")[0]}</td>
       <td>${'temprerature'}</td>
       <td>${Arr[i].temperature}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;   
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature/719";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            //console.log(data)
            var time = data.map(function(elem){
                return elem.date_time.split("T")[1].split(".")[0];
            });
            var value = data.map(function(elem){
                return elem.temperature;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Temperatue Value',
                data: value,
                backgroundColor: '#4B0082',
                borderColor: 'black',
                borderWidth: 1,              
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
        }
    }    
}