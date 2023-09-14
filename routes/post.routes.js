
const express = require('express');
const router = express.Router();
const {
  getAllPost,
  formCreateNewPost,
  newPost,
  updatePost,
  editPost,
  deletePost,
  showPost,
  confirmDelete
} = require('../scr/controllers/post.controllers');

// Ruta para la página principal (listado de posts)
router.get('/', getAllPost);


// Ruta para mostrar un blog individual
router.get('/blog/:id', showPost);

// Ruta para procesar la solicitud de eliminación de un blog
router.get('/eliminar/:id', confirmDelete); //muestra formulario de eliminacion
router.post('/eliminar/:id', deletePost); //confima eliminacion

// Ruta para mostrar el formulario de edición de un blog
router.get('/editar/:id', editPost); //mostrar el formulario de edición
router.post('/editar/:id', updatePost); //actualización real en la base de datos

// Ruta para procesar la creación de un nuevo blog
router.get('/crear', formCreateNewPost);
router.post('/crear', newPost);
    

module.exports = router;

