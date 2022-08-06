//Deletes the account
function DeleteAccount()
{
    localStorage.removeItem("Username");
    localStorage.removeItem("Password");

    document.location="login.html";
}


//logs out of accounts
function Logout()
{
    document.location="login.html";
}


//Redirects user to the register page if account is not found
function RedirectToRegister()
{

    if(localStorage.Username == null)
    {
        document.location="register.html";
    }

}
RedirectToRegister();


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