const frutas = require("../mocks/frutas.mock");

function buscarFrutaPorId(id) {
  return frutas.find(fruta => fruta.id === id);
}

module.exports = {
  buscarFrutaPorId
};