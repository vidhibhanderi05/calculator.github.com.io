
function clr()
{
    document.getElementById("result").value="";
}

function sqr()
{
    let x=document.getElementById("result").value;
    let y=Math.pow(x,2);
    document.getElementById("result").value=y;
}

function add(val)
{
    document.getElementById("result").value+=val;
}

function bs()
{
    let x=document.getElementById("result").value;
    let y=x.slice(0,-1)
    document.getElementById("result").value=y;
}

function sqrt()
{
    let x=document.getElementById("result").value;
    let y=Math.sqrt(x);
    document.getElementById("result").value=y;
}

function final()
{
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
