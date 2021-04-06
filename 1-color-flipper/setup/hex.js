const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

document.addEventListener('click', function()
{
    //gen the hex color to background color
    let hexcolor = '#';
    for (let i = 0; i < 6; i++)
    {
        let genedNum = GetRandomHexValue();
        hexcolor += hex[genedNum];
        console.log(genedNum);
    }
    
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
})

function GetRandomHexValue()
{
    return Math.floor(Math.random() * hex.length);
}