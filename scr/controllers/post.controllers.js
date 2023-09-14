//controladores

const { Model } = require('sequelize');
const {postModel} = require('../models/post');
 

// Obtener todos los posts
exports.getAllPost = async (req, res) => {
    // Lógica para obtener todos los posts de la base de datos
  };
  
  // Mostrar formulario para crear un nuevo post
  exports.formCreateNewPost = (req, res) => {
    // Lógica para mostrar el formulario
  };
  
  // Mostrar formulario para editar un post existente
  exports.formUpdatePost = (req, res) => {
    // Lógica para mostrar el formulario de edición
  };
  
  // Crear un nuevo post
  exports.newPost = async (req, res) => {
    // Lógica para crear un nuevo post en la base de datos
  };
  
  // Actualizar un post existente
  exports.updatePost = async (req, res) => {
    // Lógica para actualizar un post en la base de datos
  };
  
  // Eliminar un post existente
  exports.deletePost = async (req, res) => {
    // Lógica para eliminar un post de la base de datos
  };

  Model.exports= {getAllPost,
    formCreateNewPost,
    formUpdatePost,
    newPost,
    updatePost,
    deletePost}