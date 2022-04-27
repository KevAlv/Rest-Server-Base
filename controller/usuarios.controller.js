const response = require('express');
const request = require('express');

const getUsuarios = (req = request, res = response) => {
    const {q, nombre = 'sin nombre',page=1,limit=10} = req.query;

    res.json({
        msg:'get API - controlador',
        q,nombre,page,limit
    });}

const postUsuarios = (req, res) => {
    const {Nombre,Edad} = req.body;
    res.json({
        msg:'post API - controlador postUsuarios',
        Nombre,Edad
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