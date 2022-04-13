const express = require('express');
const router = express.Router();
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');
const upload = require("../middlewares/multerMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');
const validacionesProductos = require('../middlewares/validatorProductsMiddleware');
const validacionesEditProductos = require('../middlewares/validatorEditProductsMiddleware');

/* Con readDetail - LEE PRODUCTO SEGUN ID */
router.get('/', productController.products)

router.get('/detail/:id', productController.productDetails);

router.get('/productCart', productController.productCart);
router.post('/productCart', productController.buyCart);

router.get('/create', authMiddleware, productController.createProduct);
router.post('/create', upload.single("imagen"), validacionesProductos, productController.store);

router.get('/edit/:id', authMiddleware, productController.editProduct);
router.put('/edit/:id', upload.single("imagen"), validacionesEditProductos, productController.update);

router.delete('/delete/:id', productController.destroy)

router.get('/favoritos',productController.favoritos)

router.get('/search', productController.search);

module.exports = router