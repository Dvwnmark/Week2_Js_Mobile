var url = "https://650423e0c8869921ae248ff5.mockapi.io/api/users"    
var data = {};    
data.firstname = "John2";    
data.lastname = "Snow2";    
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();    
xhr.open("PUT", url + '/1', true);    
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');    
xhr.onload = function() {      
    var users = JSON.parse(xhr.responseText);      
    if (xhr.readyState == 4 && xhr.status == "200") {        
        console.table(users);      
    } else {        
        console.error(users);      
    }    
}    
xhr.send(json);