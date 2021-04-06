// set init count value
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item)
{
 console.log(item);   
 item.addEventListener('click', function(e)
 {
     console.log(e.currentTarget);
    const styles = (e.currentTarget.classList);
    if (styles.contains('decrease'))
    {
        count--;
    }
    else if (styles.contains('increase'))
    {
        count++;
    }
    else
    {
        count = 0;
    }
    value.textContent = count;
    if (count > 0)
    {
       value.style.color = 'green';
    }
    else if (count < 0)
    {
        value.style.color = 'red';
    }
    else
    {
        value.style.color = 'black';
    }
 })
});
