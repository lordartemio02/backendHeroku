import { Router } from 'express';
import mainController from '../controllers/mainController.js';
import itemController from '../controllers/itemController.js';
import fileController from '../controllers/fileController.js';
import authController from '../controllers/authController.js';

const router = Router();

router.post('/sendMessage', mainController.sendMessage);

router.get('/', (req, res, next) => {
    res.status(404).sendFile('./pages/basePage.html', { root: '.' });
});

router.get('/getProducts', itemController.getProducts);
router.get('/getProduct/:id', itemController.getProduct);
router.post('/addProduct', itemController.addProduct);
router.put('/updateProduct', itemController.updateProduct);
router.delete('/deleteProduct/:id', itemController.deleteProduct);

router.get('/getHeaders', itemController.getHeaders);

router.post('/loadFiles', fileController.loadFiles);
router.get('/getFiles', fileController.getFiles);
router.get('/getImg', fileController.getImg);
router.get('/getDocument', fileController.getDocument);
router.get('/getAudio', fileController.getAudio);
router.get('/getVideo', fileController.getVideo);
router.get('/getOther', fileController.getOther);

router.post('/login', authController.login);

export default router;
