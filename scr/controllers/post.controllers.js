//controladores

const { Model } = require('sequelize');
const {postModel} = require('../models/post');
 
  // Obtener todos los post
 const getAllPost = async (req, res) => {
      const posts = await postModel.findAll();
  
      res.render('index', { posts });

  };
  //visulizar un idPost

  const showPost = async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await postModel.findByPk(postId);
  
      if (!post) {
        return res.status(404).send('Blog no encontrado');
      }
  
      res.render('blog', { post });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al mostrar el blog');
    }
  };
  // Renderiza la vista para crear un nuevo blog
  const formCreateNewPost = (req, res) => {
    res.render('crear'); 
};

  // Crear un nuevo blog 

    const newPost = async (req, res) => {
        try {
            const { titulo_post, contenido, link } = req.body;
            const post = await postModel.create({ titulo_post, contenido, link });

            res.redirect(`/blog/${post.id}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el blog');
        }
    };

  
  // Editar un blog (mostrar el formulario de edición)
    const editPost = async (req, res) => {
        try {
        const postId = req.params.id;
        const post = await postModel.findByPk(postId);
    
        if (!post) {
            return res.status(404).send('Blog no encontrado');
        }
    
        res.render('editar', { post });
        } catch (error) {
        console.error(error);
        res.status(500).send('Error al mostrar el formulario de edición');
        }
    };
    
  // Actualizar un blog boton guardar post
    const updatePost = async (req, res) => {
        try {
        const postId = req.params.id;
        const post = await postModel.findByPk(postId);
    
        if (!post) {
            return res.status(404).send('Blog no encontrado');
        }
    
        const { titulo_post, contenido, link } = req.body;
        await post.update({ titulo_post, contenido, link });
    
        res.redirect(`/blog/${postId}`);
        } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el blog');
        }
    };
    
  // Mostrar el formulario de confirmación para eliminar un blog
    const confirmDelete = async (req, res) => {
        try {
        const postId = req.params.id;
        const post = await postModel.findByPk(postId);
    
        if (!post) {
            return res.status(404).send('Blog no encontrado');
        }
    
        res.render('eliminar', { post });
        } catch (error) {
        console.error(error);
        res.status(500).send('Error al mostrar el formulario de eliminación');
        }
    };
  
  // Eliminar un blog
    const deletePost = async (req, res) => {
        try {
        const postId = req.params.id;
        const post = await postModel.findByPk(postId);
    
        if (!post) {
            return res.status(404).send('Blog no encontrado');
        }
    
        await post.destroy();
        res.redirect('/');
        } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el blog');
        }
    };
    
  
  module.exports= {
    getAllPost,
    formCreateNewPost,
    newPost,
    updatePost,
    editPost,
    deletePost,
    showPost,
    confirmDelete}