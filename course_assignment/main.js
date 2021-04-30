
document.getElementById('button01').addEventListener('click', getView1);
function getView1(){
    
    HideAverage();
    HideWarn();
    showFilter();
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather')
    .then((res) => res.json())
    .then((data) => {
        var Arr = data.slice(0, 50); 
        var heading='<h2>This is view 1<br> Showing latest 50 measurements</h2>';
        document.getElementById('heading').innerHTML = heading;
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
       <td>${Object.keys(Arr[i].data)}</td>
       <td>${Object.values(Arr[i].data)}</td>    
       </tr> </tbody> 
        `;
        };      
      
    document.getElementById('table').innerHTML = output;
    })
}
function HideFilter(){
    var input = document.getElementById('myInput');
    input.style.display = "none";
}
function showFilter(){
    var input = document.getElementById('myInput');
    input.style.display = "block";
}
function HideAverage(){
    var input = document.getElementById('aver');
    input.style.display = "none";
}
function showFilter(){
    var input = document.getElementById('aver');
    input.style.display = "block";
}
function HideWarn(){
    var input = document.getElementById('warn');
    input.style.display = "none";
}
function showWarn(){
    var input = document.getElementById('warn');
    input.style.display = "block";
}
const searchFun = ()=>{
    let filter = document.getElementById('myInput').value.toUpperCase();
    let mytable = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');
    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[3];
        if(td){
            let textvalue = td.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
               tr[i].style.display="" ;

            }else{
                tr[i].style.display="none";
            }
        }
    }
}

