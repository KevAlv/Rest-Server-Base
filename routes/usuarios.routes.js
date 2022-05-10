const { Router } = require('express');
const { check, checkSchema } = require('express-validator');

const router = Router();
const {getUsuarios,
       postUsuarios,
       putUsuarios,
       patchUsuarios,
       deleteUsuarios} = require('../controller/usuarios.controller');
const { validarCampos } = require('../middlewares/valida_campos');
const {esRolValido,emailExiste} = require('../helpers/db-validators')
  router.get('/', getUsuarios);

  router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe ser de más de 6 letras').isLength({min:6}),
    check('correo','El correo no es valido').isEmail(),
    // check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('correo').custom(emailExiste),
    check('rol').custom(esRolValido),
    validarCampos
  ], postUsuarios);

  router.put('/:id', putUsuarios);

  router.patch('/', patchUsuarios);

  router.delete('/', deleteUsuarios);

module.exports = router;