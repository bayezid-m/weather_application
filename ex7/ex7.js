var DB=
{
    "students": [
      {
        "id": 0,
        "name": "Lennier",
        "exercise_points": 232,
        "info": ""
      },
      {
        "id": 1,
        "name": "Sheridan",
        "exercise_points": 53,
        "info": ""
      },
      {
        "id": 2,
        "name": "Mollari",
        "exercise_points": null,
        "info": ""
      },
      {
        "id": 3,
        "name": "Kosh",
        "exercise_points": 0,
        "info": "Did not participate"
      },
      {
        "id": 4,
        "name": "Zathras",
        "exercise_points": 1,
        "info": "Species: unknown"
      },
      {
        "name": "Student X",
        "exercise_points": 60,
        "info": "No info.",
        "id": 5
      }
    ]
}
var url = 'http://aws.random.cat/meow';
fetch(url)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        document.getElementById('cat').innerHTML=data.file
        document.getElementById('cat').setAttribute("href",data.file)
    });

function main_table(){
    var tab= document.getElementById('table')
    tab.innerHTML=`<tr>
                <th>Name</th>
                <th>info</th>
                <th>Points</th>
                </tr>`
  
    Length=DB.students.length
    for(var i=0; i<Length;i++){
        
        var row=`<tr class="points ${(DB.students[i].exercise_points == null ||DB.students[i].exercise_points<50 ? 'true' : 'false')}">
                    <td>${DB.students[i].name}</td>
                    <td>${DB.students[i].info}</td>
                    <td >${DB.students[i].exercise_points}</td>
                </tr>`

        tab.innerHTML += row;

    }
}
function add_btn(){
    n =document.getElementById('name').value;
    info=document.getElementById('info').value;
    points=document.getElementById('points').value;
    console.log(n,info,points)
    DB.students.push({id:"", "name":n,"info":info,"exercise_points": points});
    main_table();
}