const Roles = require('../models/rol');
const Usuario = require('../models/usuario');


const esRolValido = async (rol='')=>{
    const existeRol = await Roles.findOne({rol});
    console.log(existeRol);
    if(!existeRol){
      throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
  }


    //Verificar Correo
const emailExiste = async(correo='')=>{
  let existeEmail = await Usuario.findOne({correo})
    if(existeEmail){
      throw new Error(`El correo ${correo} ya esta registrado en la base de datos`)
    }
}
module.exports = {
    esRolValido,
    emailExiste,
}