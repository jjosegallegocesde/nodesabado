//Se trae la funcion Router para 
//separra las rutas de mi api
const { Router }=require('express')

//una avribale que personaliza mis rutas
const rutas=Router()

//rutas del api
    rutas.get('/avanzada/v1/jugadores/id', function (req, res) {
        res.send('Hello World')
    })
  
    rutas.get('/avanzada/v1/jugadores', function (req, res) {
        res.send('Hello World')
    })
  
    rutas.post('/avanzada/v1/jugadores', function (req, res) {
      res.send('Hello World')
    })
  
    rutas.put('/avanzada/v1/jugadores/id', function (req, res) {
      res.send('Hello World')
    })
  
    rutas.delete('/avanzada/v1/jugadores/id', function (req, res) {
      res.send('Hello World')
    })

    module.exports=rutas