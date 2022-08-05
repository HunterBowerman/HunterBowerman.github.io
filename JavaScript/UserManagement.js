var login;
var saveLogin;


//Account status
function CheckForAccount()
{
    if(localStorage.Username && localStorage.Password != undefined)
    {
        login = true;
    }
    else
    {
        login = false;
    }

    if(login == true)
    {
        console.log("UserManager found an account: ", localStorage.Username, localStorage.Password, login);
    }
    else
    {
        console.log("UserManager didn't find an account", login);
    }
}

CheckForAccount();