function ecran(val)
{
    document.getElementById('ecran').value +=val;

}

function efface(){
    let ecran=document.getElementById('ecran').value;
    
    document.getElementById('ecran').value=ecran.slice(0,length-1);
   
}
function calculer()
{
    let x=document.getElementById('ecran').value;
    let y=eval(x);

    document.getElementById('ecran').value=y
}
function tout()
{
    document.getElementById('ecran').value="";
}