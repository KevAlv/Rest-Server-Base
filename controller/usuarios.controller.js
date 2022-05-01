const response = require('express');
const request = require('express');
const bcrypt = require('bcrypt')

const Usuario = require('../models/usuario');

const getUsuarios = (req = request, res = response) => {
    const {q, nombre = 'sin nombre',page=1,limit=10} = req.query;

    res.json({
        msg:'get API - controlador',
        q,nombre,page,limit
    });}

const postUsuarios = async (req, res) => {
    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});

    //Verificar Correo
    const existeEmail = await Usuario.findOne({correo})
    if(existeEmail){
        return res.status(400).json({
            msg: 'Ese correo ya esta registrado'
        })
    }

    //Encriptar password
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password,salt);

    await usuario.save();
    res.json({
        msg:'post API - controlador postUsuarios',
        usuario
    });}
    
const putUsuarios = (req, res) => {
    const {id} =  req.params;
    res.json({
        msg:'put API - controlador putUsuarios',
        id
    });}
    
const patchUsuarios = (req, res) => {
    res.json({
        ok:true,
        msg:'patch API - controlador patchUsuarios' 
    });}
    
const deleteUsuarios = (req, res) => {
    res.json({
        ok:true,
        msg:'delete API - controlador delete'
    });}
    
module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios
}