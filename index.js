let newcount = document.getElementById("count");
let newentry = document.getElementById("save-el");
let count = 0;

function incrementCount()
{
    count = count + 1;
    newcount.innerText = count;
}

incrementCount();

function save()
{
    let countStr = count + " - ";
    newentry.textContent += countStr;
    newcount.textContent = 0;
    count = 0;
}



