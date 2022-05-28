// control variables 
let logInControl = false;

// LOGIN AREA - STARTER

//Object content login/pasword
const LOGINS = new Array();

LOGINS['invader']   = 'redavni';
LOGINS['rafa']      = 'afar';
LOGINS['wesley']    ='yelsew';


//Labels inside form
const labels    = document.querySelectorAll('.form-control label');

//Inputs of form
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
            console.log('sucesso');
        }
        else
        {
            inputLogin.value = ''; inputPassword.value = '';
            console.log('senha errada');
            return false;

        }
    }
    else
    {
        console.log('login errado');
        return false;
    }

});




// LOGIN AREA - END