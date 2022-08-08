function StoreUsersInfo()
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



//Header Buttons
function HomeButton()
{
    document.location="/HTML/index.html"
}

function AccountButton()
{
    document.location="/HTML/account.html"
}

function PhotographyButton()
{
    document.location="/Photography/photography.html"
}

function PortfolioButton()
{
    document.location="/HTML/portfolio.html"
}