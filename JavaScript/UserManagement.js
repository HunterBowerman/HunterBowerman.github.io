//Account status
function CheckForAccount()
{
    if(localStorage.Username == null)
    {
        console.error("username not found");
    }
    else
    {
        console.log("Username: ", localStorage.Username);
    }



    if(localStorage.Password == null)
    {
        console.error("password not found");
    }
    else
    {
        console.log("Password: ", localStorage.Password);
    }
}

CheckForAccount();