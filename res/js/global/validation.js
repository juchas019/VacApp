'use strict'


// ajax przy sprawdzaniu czy wprowadzone przy logowaniu dane są poprawne 

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const button = document.getElementById('loggin-button');

button.addEventListener('click', function(){
    document.getElementById('alert').classList.add('hidden');
    $.ajax({
        type: "POST",
        url: "./main/validation.php",
        data: {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
    })
    .done(function (msg) {
        switch(msg){
            case "correct":
                document.forms["form-login"].submit();
            break;
            case "incorrect":
                document.getElementById('alert').classList.remove('hidden');
                document.getElementById('error').textContent = "Błędne dane logowania";
            break;
            case "error":
                document.getElementById('error').textContent = "Nieznany bład";
            break;
            default:
                document.getElementById('error').textContent = "Error!!!";
        }
        
    });
});