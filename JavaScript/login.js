function HomeButton()
{
    document.location="index.html"
}

function AccountButton()
{
    document.location="account.html"
}

function PhotographyButton()
{
    document.location="photography.html"
}

function PortfolioButton()
{
    document.location="portfolio.html"
}


function LoginButton()
{
    var x = true;

    var Username = document.getElementById('username').value;
    var Password = document.getElementById('password').value;

    if(Username != localStorage.Username)
    {
        console.log("Username not found");
        return;
    }
    else
    {
        console.log("Username was found");
    }

    if(Password != localStorage.Password)
    {
        console.log("Password not found");
        return;
    }
    else
    {
        console.log("Passowrd was found");
    }

    if(Username && Password != null)
    {
        document.location="account.html"
    }
    
}