//Header Buttons
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


//Deletes the account
function DeleteAccount()
{
    localStorage.removeItem("Username");
    localStorage.removeItem("Password");

    document.location="login.html";
}

function Logout()
{
    
}

//Redirects user to the ragister page if account is not found
function RedirectIfNull()
{

    if(localStorage.Username == null)
    {
        document.location="register.html";
    }

}
RedirectIfNull();

//displays the users name
function DisplayUsername()
{
    
}
DisplayUsername();