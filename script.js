let result = document.getElementById("inputtext");

let calculate=(number)=>{
result.value+=number;
}
let Result=()=>{
try{
    result.value=eval(result.value)
}
catch(err){
    alert("Enter the valid Input");
}
}
function clr(){
    result.value=" ";
}
 function del(){
    result.value = result.value.slice(0,-1);
 }
 function cos( ) {
    result.value=Math.cos(result.value);
}

function sin()
{
    result.value = Math.sin(result.value);
}
function tan()
{
    result.value = Math.tan(result.value);
}
function ln()
{
    result.value = Math.log(result.value);
}

function pow2()
{
    result.value = eval(result.value)*eval(result.value);
}
function pow3()
{
    result.value = eval(result.value)*eval(result.value)*eval(result.value);
}
function sqrt()
{
    result.value = Math.sqrt(result.value);
}
function cbrt()
{
    result.value = Math.cbrt(result.value);
}
function PI()
{
    result.value = 3.14*(result.value);
}
function fact()
{  var fact = 1;

    for(var i = 1 ; i <= result.value ; i++)

    {

        fact *= i;

    }

    result.value = fact;

}




