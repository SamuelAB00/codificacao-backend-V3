const express = require('express')
const app = express()
const port = 3000

let alunos = [
  {id: 1, nome: "Edio", idade: 35},
  {id: 2, nome: "Vanessa", idade:9},
  {id: 3, nome: "Schuster", idade:13},
]

const frutas = [
  {name: "laranja", price:5.00},
  {name: "uva", price:3.00},
  {name: "banana", price:2.50},
]

app.get('/frutas', (req, res) => {
  res.json({
    success: true,
    data: frutas,
  })
})

app.get('/', (req, res) => {
  res.send('Vanessa Schuster')
})

app.get('/alunos', (req, res) => {
  res.json({
    success: true,
    data: alunos,
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
