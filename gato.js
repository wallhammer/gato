let tablero=["","","","","","","","",""];
let turno ="x";
function clickcasilla(evt)
{
    
  let id= Number(evt.target.id[1])-1;
  if(tablero[id]=="")
  {
    tablero[id]="x";
    evt.target.classList.add(turno);
    if(turno =="x"){
        turno="0";

    }else{
        turno="x";
    }
    }
}

function ganador()
{

}
function reiniciar()
{
    let casillas =document.querySelectorAll("#casilla");
    tablero=["","","","","","","","",""];
for(var i=0; i<9;i++)
{
    casillas[i].classList.remove("x","0");
}
}
let casillas =document.querySelectorAll("#casilla");
for(var i=0; i<9;i++)
{
    casillas[i].addEventListener('click',clickcasilla);
}

