const express = require ('express');
const fs = require('fs');
const app = express();

const PORT = 3000;
app.get('/', (req, res) => {
    res.send("Hello World");
});
//task1
app.get('/json', (req, res) => {
    fs.readFile('server.json', function(error, data){
        if(error){
            res.writeHead(404)
            res.writeHead('error: File not found');
        }  else {
            res.write(data)
        }
        res.end() 
      })
});
//task2
app.get('/html', (req, res) => {
    fs.readFile('server.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.writeHead('error: File not found');
        }  else {
            res.write(data)
        }
        res.end() 
      })   
});
//task3
app.get('/html/0', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1 style="text-align: center">Days of the week</h1>');
    res.write('<table border="1"><tr><th>Day</th><th>Index</th></tr>');
    res.write('<tr><td>Monday</td><td>0</td></tr>');
    res.end('</body></html>');    
});
app.get('/html/1', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1 style="text-align: center">Days of the week</h1>');
    res.write('<table border="1"><tr><th>Day</th><th>Index</th></tr>');
    res.write('<tr><td>Tuesday</td><td>1</td></tr>');
    res.end('</body></html>');    
});
app.get('/html/2', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1 style="text-align: center">Days of the week</h1>');
    res.write('<table border="1"><tr><th>Day</th><th>Index</th></tr>');
    res.write('<tr><td>Wednesday</td><td>2</td></tr>');
    res.end('</body></html>');    
});
app.get('/html/3', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1 style="text-align: center">Days of the week</h1>');
    res.write('<table border="1"><tr><th>Day</th><th>Index</th></tr>');
    res.write('<tr><td>Thursday</td><td>3</td></tr>');
    res.end('</body></html>');    
});
app.get('/html/4', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1 style="text-align: center">Days of the week</h1>');
    res.write('<table border="1"><tr><th>Day</th><th>Index</th></tr>');
    res.write('<tr><td>Friday</td><td>4</td></tr>');
    res.end('</body></html>');    
});
app.get('/html/5', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1 style="text-align: center">Days of the week</h1>');
    res.write('<table border="1"><tr><th>Day</th><th>Index</th></tr>');
    res.write('<tr><td>Saturday</td><td>5</td></tr>');
    res.end('</body></html>');    
});
app.get('/html/6', (req, res) => {
    res.write('<html><head></head><body>');
    res.write('<h1 style="text-align: center">Days of the week</h1>');
    res.write('<table border="1"><tr><th>Day</th><th>Index</th></tr>');
    res.write('<tr><td>Sunday</td><td>6</td></tr>');
    res.end('</body></html>');    
});
app.listen(PORT, ()=>
{
    console.log(`App listening to port: ${PORT}`);
});