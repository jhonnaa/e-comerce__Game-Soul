const {body} = require('express-validator');
const path = require('path')

const validaciones = [
    body('nombre')
        .notEmpty().withMessage("Debes completar con un nombre")
        .isLength({min: 2}).withMessage("El nombre debe tener al menos 2 carateres"),
    body('tyc')
        .notEmpty().withMessage("Debes aceptar los términos y condiciones"),
    body('fechaNacimiento')
        .notEmpty().withMessage("Debes elegir tu fecha de nacimiento"),
    body('email')
        .notEmpty().withMessage("Debes completar con un email")
        .isEmail().withMessage("Debes ingresar un email válido"),
    body('password')
        .notEmpty().withMessage("Debes escribir una contraseña")
        .isLength({min: 8}).withMessage("Debes escribir una contraseña de 8 o más caracteres"),
    body('avatar').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png']
        
        if(file){
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
            throw new Error ('Las extensiones permitidas son .jpg .png')
            }
        }
        return true;
    })
]

module.exports = validaciones;