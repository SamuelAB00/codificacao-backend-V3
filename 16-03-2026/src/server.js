const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Valeu gurizada!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const frutas = require("../mocks/frutas.mock");

function buscarFrutaPorId(id) {
  return frutas.find(fruta => fruta.id === id);
}

module.exports = {
  buscarFrutaPorId
};