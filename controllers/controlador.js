//EL controlador se encaragar de administrar
//las peticione y repuestas

const {request,response}=require('express')

//cuales son las operaciones
//que debe realizar mi SERVIDOR
function registrarJugador(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy registrando un jugador"
        }
    )
}

function buscarJugador(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando un jugador"
        }
    )

}

function buscarJugadores(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando todos los jugadores"
        }
    )

}

function editarJugador(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando un jugador"
        }
    )

}

function eliminarJugador(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando un jugador"
        }
    )

}


module.exports={

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}