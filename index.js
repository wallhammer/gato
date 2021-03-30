// ==================== CONSTANTES ==================== //
const  STATUS_DISPLAY  =  documento . querySelector ( '. notificación de juego' ) ,
  GAME_STATE  =  [ "" ,  "" ,  "" ,  "" ,  "" ,  "" ,  "" ,  "" ,  "" ] ,
  GANANCIAS  =  [
    [ 0 ,  1 ,  2 ] ,
    [ 3 ,  4 ,  5 ] ,
    [ 6 ,  7 ,  8 ] ,
    [ 0 ,  3 ,  6 ] ,
    [ 1 ,  4 ,  7 ] ,
    [ 2 ,  5 ,  8 ] ,
    [ 0 ,  4 ,  8 ] ,
    [ 2 ,  4 ,  6 ]
  ] ,
  WIN_MESSAGE  =  ( )  =>  `El jugador $ { currentPlayer } ha ganado!` ,
  DRAW_MESSAGE  =  ( )  =>  `El juego ha terminado en empate!` ,
  CURRENT_PLAYER_TURN  =  ( )  =>  `Turno del jugador $ { currentPlayer } `

// ==================== VARIABLES ==================== //
deje  gameActive  =  true ,
  currentPlayer  =  "O"

// ==================== FUNCIONES ==================== //

function  main ( )  {
  handleStatusDisplay ( CURRENT_PLAYER_TURN ( ) )
  oyentes ( )
}

 oyentes de funciones ( )  {
  documento . querySelector ( '. contenedor-juego' ) . addEventListener ( 'clic' ,  handleCellClick )
  documento . querySelector ( '.game-restart' ) . addEventListener ( 'clic' ,  handleRestartGame )
}

function  handleStatusDisplay ( mensaje )  {
  STATUS_DISPLAY . innerHTML  =  mensaje
}

function  handleRestartGame ( )  {
  gameActive  =  verdadero
  currentPlayer  =  "X"
  reiniciarGameState ( )
  handleStatusDisplay ( CURRENT_PLAYER_TURN ( ) )
  documento . querySelectorAll ( '. celda de juego' ) . forEach ( celda  =>  celda . innerHTML  =  "" )
}

function  handleCellClick ( clickedCellEvent  / ** Type Event ** / )  {
  const  clickedCell  =  clickedCellEvent . objetivo
  if  ( clickedCell . classList . contains ( 'game-cell' ) )  {
    const  clickedCellIndex  =  Matriz . de ( clickedCell . parentNode . hijos ) . indexOf ( clickedCell )
    if  ( GAME_STATE [ clickedCellIndex ]  ! ==  ''  ||  ! gameActive )  {
      devolver  falso
    }

    handleCellPlayed ( clickedCell ,  clickedCellIndex )
    handleResultValidation ( )
  }
}

function  handleCellPlayed ( clickedCell  / ** objeto HTML ** / ,  clickedCellIndex )  {
  GAME_STATE [ clickedCellIndex ]  =  currentPlayer  // Agrega en la posición correspondiente el valor ya sea "X" u "O" en el estado actual del juego
  clickedCell . innerHTML  =  currentPlayer  // Agrega en el HTML el valor del jugador
}

function  handleResultValidation ( )  {
  deja  roundWon  =  falso
  for  ( let  i  =  0 ;  i  <  WINNING . length ;  i ++ )  {  // Itera cada uno de las posibles combinaciones ganadores
    const  winCondition  =  GANANCIAS [ i ]  // Guarda la combinación por ejemplo: [0, 1, 2]
    let  position1  =  GAME_STATE [ winCondition [ 0 ] ] ,
      position2  =  GAME_STATE [ winCondition [ 1 ] ] ,
      position3  =  GAME_STATE [ winCondition [ 2 ] ]  // Almacena el valor del estado actual del juego según las posiciones de winCondition

    if  ( posición1  ===  ''  ||  posición2  ===  ''  ||  posición3  ===  '' )  {
      continuar ;  // Si hay algún valor vacio nadie ha ganado aún
    }
    if  ( posición1  ===  posición2  &&  posición2  ===  posición3 )  {
      roundWon  =  true  // Si todas las posiciones coinciden entonces, dicho jugador ha ganado la partida
      descanso
    }
  }

  if  ( roundWon )  {
    handleStatusDisplay ( WIN_MESSAGE ( ) )
    gameActive  =  falso
    regreso
  }

  deja  roundDraw  =  ! GAME_STATE . incluye ( "" )  // Si todas las celdas tienen valor y la sentencia anterior fue falsa entonces es empate
  if  ( roundDraw )  {
    handleStatusDisplay ( DRAW_MESSAGE ( ) )
    gameActive  =  falso
    regreso
  }

  handlePlayerChange ( )
}

function  handlePlayerChange ( )  {
  currentPlayer  =  currentPlayer  ===  "X" ? "O" : "X"
  handleStatusDisplay ( CURRENT_PLAYER_TURN ( ) )
}

function  restartGameState ( )  {
  deje  i  =  GAME_STATE . largo
  while  ( i - )  {
    GAME_STATE [ i ]  =  ''
  }
}

principal ( )
