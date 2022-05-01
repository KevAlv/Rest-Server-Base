const { Router } = require('express');
const { check } = require('express-validator');
const Roles = require('../models/rol');

const router = Router();
const {getUsuarios,
       postUsuarios,
       putUsuarios,
       patchUsuarios,
       deleteUsuarios} = require('../controller/usuarios.controller');
const { validarCampos } = require('../middlewares/valida_campos');

  router.get('/', getUsuarios);

  router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe ser de más de 6 letras').isLength({min:6}),
    check('correo','El correo no es valido').isEmail(),
    // check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(async (rol='')=>{
      const existeRol = await Roles.findOne({rol});
      console.log(existeRol);
      if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
      }
    }),
    validarCampos
  ], postUsuarios);

  router.put('/:id', putUsuarios);

  router.patch('/', patchUsuarios);

  router.delete('/', deleteUsuarios);

module.exports = router;