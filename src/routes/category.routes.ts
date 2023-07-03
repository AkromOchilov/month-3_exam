import { Router } from 'express'
import categoryController from '../controllers/category.controller'
import checkToken from './../middlewares/checkToken'
import upload from '../middlewares/uploadMiddleware';

const router = Router()

router.get('/company', categoryController.GET);
router.get('/company/:categoryId', categoryController.GET_SINGLE);
router.post('/company', checkToken, upload.fields([
  { name: 'categoryImage', maxCount: 1 }
]), categoryController.POST);
router.put('/company/:categoryId', checkToken, upload.fields([
  { name: 'categoryImage', maxCount: 1 }
]), categoryController.PUT);
router.delete('/company/:categoryId', checkToken, categoryController.DELETE);

export default router;