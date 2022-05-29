// LOGIN AREA - STARTER

//Object content login/pasword

// autenticator
let logInControl = false;

const LOGINS = new Array();
LOGINS['invader']   = 'redavni';
LOGINS['rafa']      = 'afar';
LOGINS['wesley']    ='yelsew';

//Labels inside form
const labels    = document.querySelectorAll('.form-control label');

//Inputs of form
const containerLogin = document.getElementById('box-login');
const inputLogin     = document.getElementById('login');
const inputPassword  = document.getElementById('password');
const btnSubmit = document.querySelector('#btnSubmit');

labels.forEach((label) => 
{
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx)=> `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
});

btnSubmit.addEventListener('click', (e)=>
{
    let foundLogin = [false, '']

    for (const login in LOGINS) 
    {
        
        if(login == inputLogin.value)
        {
            foundLogin[0] = true;
            foundLogin[1] = inputLogin.value;
        }
        else { continue };

    }

    if(foundLogin[0])
    {
        let password = LOGINS[foundLogin[1]];

        if(password == inputPassword.value)
        {
            logInControl = true;
        }
        else
        {
            openMensage()
            return false;
        }
    }
    else
    {
        openMensage();
        return false;
    }

});

inputLogin.addEventListener('focus', closeMensage);
inputPassword.addEventListener('focus', closeMensage);


function openMensage()
{
    let msgSelector = document.querySelector('.msgResponse');

    if(typeof(msgSelector) != 'undefined' && msgSelector != null) return 
    
    let msg  = document.createTextNode('Login or Password is invalid');
    let msgResponse = document.createElement('p');
    msgResponse.classList.add('msgResponse');
    msgResponse.appendChild(msg);
    
    let form = document.getElementById('form')

    form.parentElement.insertBefore(msgResponse, form);

    inputLogin.value = ''; inputPassword.value = '';
}

function closeMensage() 
{
    let msgSelector = document.querySelector('.msgResponse');
    containerLogin.removeChild(msgSelector);
};


// LOGIN AREA - END