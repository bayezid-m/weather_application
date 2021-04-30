document.getElementById('button4_1_3').addEventListener('click', getView4_1_3);
document.getElementById('button4_2_3').addEventListener('click', getView4_2_3);
document.getElementById('button4_3_3').addEventListener('click', getView4_3_3);
document.getElementById('button4_4_3').addEventListener('click', getView4_4_3);
document.getElementById('button4_5_3').addEventListener('click', getView4_5_3);
document.getElementById('button4_6_3').addEventListener('click', getView4_6_3);


function getView4_1_3(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for wind direction<br>Showing latest 20 measurements</h2>';
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
       <td>${'wind_direction'}</td>
       <td>${Arr[i].wind_direction}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;    
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction";
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
                return elem.wind_direction;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Wind Direction',
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
function getView4_2_3(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for wind direction<br>Showing measurements for Latest 24 hours<br>(hourly average)</h2>';
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
       <td>${'wind_direction'}</td>
       <td>${Arr[i].wind_direction}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;    
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/23";
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
                return elem.wind_direction;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Wind Direction',
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
//////////////
function getView4_3_3(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/47')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for wind direction<br>Showing measurements for Latest 48 hours<br>(hourly average)</h2>';
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
       <td>${'wind_direction'}</td>
       <td>${Arr[i].wind_direction}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;    
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/47";
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
                return elem.wind_direction;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Wind Direction',
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
////////////////
function getView4_4_3(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/71')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for wind direction<br>Showing measurements for Latest 72 hours<br>(hourly average)</h2>';
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
       <td>${'wind_direction'}</td>
       <td>${Arr[i].wind_direction}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;    
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/71";
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
                return elem.wind_direction;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Wind Direction',
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
////////////////
function getView4_5_3(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/167')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for wind direction<br>Showing measurements for Latest 1 week<br>(hourly average)</h2>';
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
       <td>${'wind_direction'}</td>
       <td>${Arr[i].wind_direction}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;    
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/167";
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
                return elem.wind_direction;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Wind Direction',
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
/////////////////////////
function getView4_6_3(){
    HideFilter();
    HideAverage();
    HideWarn();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/719')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data;
        var heading='<h2>This view 4 is for wind direction<br>Showing measurements for Latest 1 month<br>(hourly average)</h2>';
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
       <td>${'wind_direction'}</td>
       <td>${Arr[i].wind_direction}</td>    
       </tr> </tbody> 
        `;
        };
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('table').innerHTML = output;    
    })
    var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_direction/719";
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
                return elem.wind_direction;
            });
            document.querySelector("#div04_1").innerHTML = '<canvas id="canvas"></canvas>';
            var ctx = document.getElementById('canvas').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Wind Direction',
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

