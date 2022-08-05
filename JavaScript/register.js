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



function RegisterButton()
{
    var Username = document.getElementById('username').value;
    var Password = document.getElementById('password').value;

    if(document.getElementById('username').value == 0)
    {
        console.error("Empty username");
        return;
    }

    if(document.getElementById('password').value == 0)
    {
        console.error("Empty password");
        return;
    }

    if(document.getElementById('username').value != 0 && document.getElementById('password').value != 0)
    {
        window.localStorage.setItem("Username", Username);
        window.localStorage.setItem("Password", Password);

        console.log("Registerd: Username: ", localStorage.Username, " Password: ", localStorage.Password);

        document.location="login.html";
    }
}