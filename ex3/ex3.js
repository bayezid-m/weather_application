console.log("Task 1.");  //task1
var num01= Math.floor(Math.random()*10)+1; //for creating random number.
var num02= Math.floor(Math.random()*10)+1;
function task1(num01, num02){
    if(num01<num02){
        console.log(num02 + ' is greater than ' + num01);
   }
   else if(num01>num02){
    console.log(num02 + ' is less than ' + num01);
   }
   else if(num01==num02){
    console.log(num02 + ' is equal to ' + num01);
   }
}
task1(num01, num02);  //calling funtion.

console.log("Task 2.");  //task 2
function task2(min, max){
    for(i=min;i<=max;i++){
        if(i%2==0){
            console.log(i);
        }
        
    }
    for(i=min;i<=max;i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}
task2(3, 7);

console.log("Task 3.");  //task 2
var oddArr=[];
var evenArr=[];
function task3(min, max){
    for(i=min;i<=max;i++){
        if(i%2==0){
            evenArr.push(i);
        }      
    }
    for(i=max;i>=min;i--){
        if(i%2!==0){
            oddArr.push(i);
        }
    }
    var result=evenArr.concat(oddArr);
    console.log(result);
}
task3(3, 7);

console.log('Task 4.');
const str = 'Eye';
function task4(testString){
    testString=testString.replace(/\W/g, '');
    testString = testString.toLowerCase();
    for( let i=0; i<testString.length; i+=1){
        if(testString[i]!==testString[testString.length -1 -i]){
            return false;
        }
    }
    return true;
}
console.log(task4(str));