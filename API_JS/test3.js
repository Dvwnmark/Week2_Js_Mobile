 //Get all users
 var url = "https://650423e0c8869921ae248ff5.mockapi.io/api/users"    
 var xhr = new XMLHttpRequest()    
 xhr.open('GET', url, true)    
 xhr.onload = function() {      
     var users = JSON.parse(xhr.responseText);      
     if (xhr.readyState == 4 && xhr.status == "200") {        
         console.table(users);      
     } else {        
         console.error(users);      
     }    
 }    
 xhr.send(null);