// importar express y controlador
const { Router} = require('express')
const {
        getAllPost,
        formCreateNewPost,
        formUpdatePost,
        newPost,
        updatePost,
        deletePost
        } = require('../scr/controllers/post.controllers')


const router = Router()
router.get('/',(req,res)=>{
        res.send('hola mundo')
})

router.get('/', newPost)

router.get('/', updatePost)


module.exports = router;

