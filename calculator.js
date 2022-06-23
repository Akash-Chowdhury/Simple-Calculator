var a;
function mode()
{
    if(a==1)
    {
        document.getElementById("body").style.backgroundColor="white";
        return a=0;
    }
    else
    {
        document.getElementById("body").style.backgroundColor="black";
        return a=1;
    }

}
let output=document.getElementById("display");
function display(num)
{
    output.value += num ;
}