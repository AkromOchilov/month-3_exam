import { Router } from 'express'
import carController from '../controllers/car.controller'
import checkToken from './../middlewares/checkToken'
import upload from '../middlewares/uploadMiddleware';

const router = Router()

router.get('/car/model', carController.GET);
router.get('/car/model/:carId', carController.GET_SINGLE);
router.post('/car/model', checkToken, upload.fields([
  { name: 'carImage', maxCount: 1 },
  { name: 'carImageInner', maxCount: 1 },
  { name: 'carImage2', maxCount: 1 }
]), carController.POST);
router.put('/car/model/:carId', checkToken, carController.PUT);
router.delete('/car/model/:carId', checkToken, carController.DELETE);

export default router;