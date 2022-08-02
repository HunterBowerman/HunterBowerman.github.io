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


//Account Functions
function DeleteAccount()
{
    localStorage.removeItem("Username");
    localStorage.removeItem("Password");

    document.location="login.html";
}

function RedirectIfNull()
{

    if(localStorage.Username == null)
    {
        document.location="register.html";
    }

}

RedirectIfNull();