const express = require('express');
const router = express.Router();

const {
  getAllMovies,
  getMovieById
} = require('../services/movies.service');

// GET /movies
router.get('/', (req, res) => {
  const movies = getAllMovies();
  res.json(movies);
});

// GET /movies/:id
router.get('/:id', (req, res) => {
  const movie = getMovieById(req.params.id);

  if (!movie) {
    return res.status(404).json({ message: 'Filme não encontrado' });
  }

  res.json(movie);
});

module.exports = router;