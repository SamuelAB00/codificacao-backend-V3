const express = require("express");
const router = express.Router();
const frutasService = require("../services/frutas.service");

router.get("/frutas/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const fruta = frutasService.buscarFrutaPorId(id);

  if (!fruta) {
    return res.status(404).json({ mensagem: "Fruta não encontrada" });
  }

  res.json(fruta);
});

module.exports = router;