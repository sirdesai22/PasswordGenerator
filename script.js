var n = 0;

let alpha = "abcdefghijklmnopqrstuvwxyz"
let Calpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let nums = "0123456789"
let symbols = "@#&*?/";

chars = alpha + nums + symbols + Calpha;

function generatePass()
{
    n = document.getElementById("valueN").value;
    var pass = "";
    if(n>0 && n<=20)
    {
        for(let i=0; i<n; i++)
        {
            let x = Math.floor(Math.random() * chars.length);
            pass = pass + chars.charAt(x);
        }
    }

    else if(n>20)
    {
        pass = "Length Exceded";
    }

    else{
        pass = "Invalid Input";
    }
    document.getElementById("pass").innerHTML = pass;
}

function resetpass(){
    document.getElementById("pass").innerHTML = "______________";
}