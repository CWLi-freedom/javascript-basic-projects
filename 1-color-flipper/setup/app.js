const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const backgroundcolor1 = document.querySelector(".backgroundcolor1");

btn.addEventListener('click', function()
{
    //get the randon number and change the background color
    var randomNumber = GetRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    backgroundcolor1.textContent = colors[randomNumber];
})

function GetRandomNumber()
{
    return Math.floor(Math.random() * colors.length);
}