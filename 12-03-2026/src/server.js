const express = require('express')
const app = express()
const port = 3000

let alunos = [
  { id: 1, nome: "Edio", idade: 35 },
  { id: 2, nome: "Vanessa", idade: 9 },
  { id: 3, nome: "Schuster", idade: 13 },
]

const frutas = [
  { name: "laranja", price: 5.00 },
  { name: "uva", price: 3.00 },
  { name: "banana", price: 2.50 },
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

// app.get('/alunos', (req, res) => {
//   res.json({
//     success: true,
//     data: alunos,
//   })
// })

//GET - buscar aluno by id

app.get('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const aluno = alunos.find(a => a.id === id)
  if (!aluno) {
    return res.status(404).json({
      success: false,
      mesage: 'Aluno não encontrado'
    })
  }
  res.json({
    success: true,
    data: aluno,
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
}) /

  app.listen(port, () => {
    console.log(`O server está sendo rodado na porta: ${port}`)
  })

//POST - criar novo aluno

app.post('/alunos', (req, res) => {
  const { nome, idade } = req.body

  if (!nome || !idade) {
    return res.status(400).json({
      success: false,
      message: "Nome e idade são obrigatórios"
    })
  }

  const novoAluno = {
    id: aluno.lenght + 1,
    nome,
    idade,
  }

  alunos.post(novoAluno)

  res.status(201).json({
    success: true,
    data: novoAluno,
    message: "cool"
  })
})